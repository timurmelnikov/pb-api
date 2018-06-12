var xhr = new XMLHttpRequest();

var idAcc = "Z185BPB70000GV";                              /* Из АПИ Привата - idAcc */

var data = JSON.stringify(
{"LossDocumentID":-1,   									/* ИД Документа убытка в КИС. При первом создании пустое, при обновлении передавать полученный ИД убытка.*/
"ClaimDate":"11.06.2018 01:01:01",							/* Из АПИ Привата - dateReg */
"InsEventDate":"11.06.2018 01:01:01",						/* Из АПИ Привата - dateEvent */
"InsuranceEventPlace":"Львів, вул. Піскова 14-5",  			/* Из АПИ Привата - locationEvent */
"EventDescrDisp":"Затоплення судами. Телефон клієнта:+380508619909",				/* Из АПИ Привата - descriptionEvent */
"ClaimerPhone":"+380508619909",								/* Из АПИ Привата - phoneClient */
"InsuranceNumDoc": "LVO3NBR-182D1CK", 						/* Из АПИ Привата - ref */
"ClaimPerson":"Лаврук Орест Володимирович",			    /* Из АПИ Привата - [fio]*/				
"InjuredObjType":3, 	/*ВАЖНО!!!! NBR = 3, HI и SKM = 2*/

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