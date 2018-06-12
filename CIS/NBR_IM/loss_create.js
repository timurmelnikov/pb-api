var xhr = new XMLHttpRequest();

var idAcc = "Z1856PB700008Y";                              /* Из АПИ Привата - idAcc */

var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"06.06.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"05.06.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"InsuranceEventPlace":"В помещении дома",  			/* Из АПИ Привата - locationEvent */
"EventDescrDisp":"Дома поднялась температура.",				/* Из АПИ Привата - descriptionEvent */
"ClaimerPhone":"+380933627223",								/* Из АПИ Привата - phoneClient */
"InsuranceNumDoc": "KGC3HI-183P3AZ", 						/* Из АПИ Привата - ref */
"ClaimPerson":"Скороход Світлана Геннадіївна",			    /* Из АПИ Привата - [fio]*/				
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