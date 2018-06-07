select
dd.id_doc,
di.ext_id,
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
join W_LS_DOGS_INFO di on di.id_dog = dd.id_dogs_info
where dd.id_doc in (

874979,
868155,
868156,
866973,
879040,
--879553,
--880595,
--880596,
--880753,
--880757,
880776,
881399,
881407,

/*-----------------*/
0
)