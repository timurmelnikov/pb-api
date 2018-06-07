select
dd.id_doc,
di.ext_id,
(select first 1
 pa.app_state_dt
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.app_state_dt desc) as state_date,
(select first 1
 pa.id_app_state
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.app_state_dt desc) as id_app_state,
(select first 1
 pa.date_sub
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.app_state_dt desc) as date_sub,
(select first 1
 pa.event_comments
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.app_state_dt desc) as event_comments
from W_DT_DOCUMENTS dd
join W_LS_DOGS_INFO di on di.id_dog = dd.id_dogs_info  and  di.ext_id in(


'Z184FPB700004T',
'Z1855PB70000EJ',
'Z184NPB70000FU',
'Z1857PB7000036',
'Z1856PB70000EC',

/*--------------------------*/
 'XXX'
)

where dd.id_doc_state <> 13 -- НЕ УДАЛЕН