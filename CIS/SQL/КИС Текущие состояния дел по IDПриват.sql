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

--104 Те, что отработаны!!!
'Z1855PB70000EJ',
'Z1851PB700007U',
'Z185CPB70000KH',
'Z1859PB700004U',
'Z185JPB700009W',
'Z1855PB70000E7',
'Z184VPB700008I',
'Z185IPB70000D8',
'Z185EPB70000DX',
/**/ --104 Те, что отработаны!!!

'Z184FPB700004T',
'Z185BPB70000DJ',
'Z185KPB70000EB',
'Z185KPB70000E3',
'Z185KPB700008K',
'Z185JPB700003T',
'Z1855PB70000D6',
'Z185JPB70000H4',
'Z1854PB70000I6',
'Z1858PB700006I',
'Z185KPB700007L',
'Z185KPB70000A8',
'Z185KPB70000BS',
'Z185LPB700006N',
--'Z185KPB70000FM',

/*--------------------------*/
 'XXX'
)

where dd.id_doc_state <> 13 -- НЕ УДАЛЕН