var xhr = new XMLHttpRequest();

var idAcc = "Z185EPB70000EU";                              /* Из АПИ Привата - idAcc */

var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"14.06.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"13.06.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"InsuranceEventPlace":"г. Ромны",  			/* Из АПИ Привата - locationEvent */
"EventDescrDisp":"Простатит",				/* Из АПИ Привата - descriptionEvent */
"ClaimerPhone":"",								/* Из АПИ Привата - phoneClient */
"InsuranceNumDoc": "SUR3HI-184B1WN", 						/* Из АПИ Привата - ref */
"ClaimPerson":"Шарандін Дмитро Андрійович",			    /* Из АПИ Привата - [fio]*/				
"InjuredObjType":2, 	/*ВАЖНО!!!! NBR = 3, HI и SKM = 2*/

"Department":6158,											/* (не меняется) Го-дбс-сп */
"LossInsuranceEvent":4,										/* (не меняется) Характер - Прочие */
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