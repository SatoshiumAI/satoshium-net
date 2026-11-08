'use strict';
// Experimental IQ-003 state comparison: no authority, writes or institutional decisions.
const clone = value => JSON.parse(JSON.stringify(value));
function compareStateAtUse(request) {
  const errors = [], unknowns = [];
  const reject = (code,field) => errors.push({code,field});
  const result = (status,additional={}) => ({status,errors,unknowns,noncanonical:true,authority_granted:false,downstream_action:'NOT_DECIDED',...additional});
  if (!request || typeof request !== 'object' || Array.isArray(request)) {reject('INVALID_REQUEST','$'); return result('FAIL');}
  const {source,receiver,at_use,current,profile} = request;
  if (!source || typeof source.identifier!=='string'||!source.identifier.trim()||typeof source.institution!=='string'||!source.institution.trim()) reject('MISSING_SOURCE_IDENTITY','source');
  if (!receiver || typeof receiver.institution!=='string'||!receiver.institution.trim()||typeof receiver.object_identifier!=='string'||!receiver.object_identifier.trim()) reject('MISSING_RECEIVER_IDENTITY','receiver');
  if (!profile || typeof profile !=='object' || !Array.isArray(profile.lifecycle_values)||!Array.isArray(profile.publication_values)||!profile.lifecycle_values.length||!profile.publication_values.length) reject('MISSING_GOVERNED_PROFILE','profile');
  function snapshot(s,label){
    if(!s || typeof s!=='object'||Array.isArray(s)){reject('MISSING_SNAPSHOT',label);return null;}
    for(const key of ['version','lifecycle_state','publication_state']){
      if(typeof s[key]!=='string'||!s[key].trim())reject('MISSING_DIMENSION',label+'.'+key);
      else if(s[key]==='unknown')unknowns.push(label+'.'+key);
      else if(key==='lifecycle_state' && profile?.lifecycle_values && !profile.lifecycle_values.includes(s[key]))reject('UNMAPPED_LIFECYCLE',label+'.'+key);
      else if(key==='publication_state' && profile?.publication_values && !profile.publication_values.includes(s[key]))reject('UNMAPPED_PUBLICATION',label+'.'+key);
    }
    if (s.lifecycle_state==='published' && !profile?.lifecycle_values?.includes('published'))reject('STATE_CONFLATION',label+'.lifecycle_state');
    return clone(s);
  }
  const historical=snapshot(at_use,'at_use');
  let present=null;
  if (current===null || current===undefined) {
    present={version:'unknown',lifecycle_state:'unknown',publication_state:'unknown'};
    unknowns.push('current.version','current.lifecycle_state','current.publication_state');
  } else present=snapshot(current,'current');
  if (errors.length)return result('FAIL');
  if(unknowns.length)return result('UNKNOWN',{source:clone(source),receiver:clone(receiver),state_at_use:historical,current_source_state:present,change_detected:'unknown'});
  const changed=['version','lifecycle_state','publication_state'].filter(k=>historical[k]!==present[k]);
  return result('COMPARED_ONLY',{source:clone(source),receiver:clone(receiver),state_at_use:historical,current_source_state:present,changed_dimensions:changed,change_detected:changed.length>0});
}
module.exports={compareStateAtUse};
