var xhr = new XMLHttpRequest();

var idAcc = "Z1842PB70000C4";                              /* Из АПИ Привата - idAcc */

var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"02.05.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"06.04.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"ClaimPerson":"Рубаева Оксана Ивановна",			    /* Из АПИ Привата - [fio]*/				
"ClaimerPhone":"+380660281032",								/* Из АПИ Привата - phoneClient */
"InsuranceEventPlace":"Кременчуг",  			/* Из АПИ Привата - locationEvent */
"LossInsuranceEvent":4,										/* (не меняется) Характер - Прочие */
"InjuredObjType":2, 	/* (зависит от вида страхования!!!) NBR = 3 / HI и SKM = 2 */
"EventDescrDisp":"Полипы в желудке. Телефон клієнта:+380965592470",				/* Из АПИ Привата - descriptionEvent */
"Department":6158,											/* (не меняется) Го-дбс-сп */
"InsuranceNumDoc": "DNH0HI-18362UM", 						/* Из АПИ Привата - ref */
"ExtId": idAcc,   								            /* Из АПИ Привата - idAcc */
"ExtDoc":"\\\\filestore-5\\loss_doc_privat\\"+idAcc, 	    /* Ссылка на документы убытка */
"ExtStatusDeal": 92, 										/* Из АПИ Привата - statusDeal */
"IdDocState": 1, 											/* (не меняется) ИД статуса убытка в КИС. Создаем и Обновляем всегда в статусе 1 - Сбор документов */
//"IdTypeNews": 69											/* Передается при обновлении убытка документами. Для ИВ-ВО передавать (NBR) 69. Для ЗНБ передавать (IM) 68 */


}
);

xhr.open("POST", 'cis/addlossdocument', true);
xhr.onreadystatechange = function () { if (xhr.readyState == 4 && xhr.status == 200) { alert(xhr.responseText); } }

var params = 'formData='+encodeURIComponent(data);
xhr.send(params);