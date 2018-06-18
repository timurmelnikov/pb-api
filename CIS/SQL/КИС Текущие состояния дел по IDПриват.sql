select
--dd.*,
dd.id_doc,
di.ext_id,

/* --По датам
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
/**/

(select first 1
 pa.app_state_dt
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.id_app desc) as state_date,
(select first 1
 pa.id_app_state
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.id_app desc) as id_app_state,
 dd.pay_sum,
(select first 1
 pa.date_sub
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.id_app desc) as date_sub,
(select first 1
 pa.event_comments
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.app_state_dt desc) as event_comments,
 (select first 1
 pa.r
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.app_state_dt desc) as r,
 (select first 1
 pa.w
 from W_DT_PB_APPLICATIONS pa where pa.id_w_doc = dd.id_doc
 order by pa.app_state_dt desc) as w
from W_DT_DOCUMENTS dd
join W_LS_DOGS_INFO di on di.id_dog = dd.id_dogs_info  and  di.ext_id in(

--104 Проверять их!!!
'Z1855PB70000EJ',
'Z1851PB700007U',
'Z185CPB70000KH',
/**/ --104 Проверять их!!!


'Z184FPB700004T',
'Z185BPB70000DJ',
'Z185BPB70000AK',
'Z185CPB700006R',
'Z1841PB700004G',
'Z185EPB70000EU',
'Z1859PB700004U',
'',
'',
'',
'',
'',
'',

/*--------------------------*/
 'XXX'
)

where dd.id_doc_state <> 13 -- НЕ УДАЛЕН