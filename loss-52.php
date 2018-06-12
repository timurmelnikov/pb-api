<?php
set_time_limit(5000000);

/*
Отправлена(в работе ДС)
Статус присваивается заявкам которые должны быть обработаны Страховой компанией 
"ria_Type": "k"
*/

require_once('security/settings.php');

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url_operation);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_SSLKEY, dirname(__FILE__) . "/security/key.pem");
curl_setopt($curl, CURLOPT_SSLCERT, dirname(__FILE__) . "/security/19dec_cert.pem");
curl_setopt($curl, CURLOPT_KEYPASSWD, $curl_password);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Accept: application/json',
    'sid: Pa9tees9hequooQu5ahpo',
));

curl_setopt($curl, CURLOPT_POSTFIELDS, '{
    "opCode": "setUsIdHandle",
    "request": {
        "req_ID": "Z185BPB70000DJ"
    },
    "actionLst": [
        {
            "ria_Type": "k",
            "ria_Comment": "Семенюк Елена Александровна +380672231169",
	        "ria_DatE": "2018-06-12T00:00:00.000"
        }
    ]
}');

set_time_limit(300);

$data = curl_exec($curl);
curl_close($curl);

echo '<pre>';
//print_r(json_decode($data, true));
print_r($data);
echo '</pre>';

/**
* Страхование здоровья (HI):            Семенюк Елена Александровна +380672231169
* Недвижимость без осмотра (NBR и SKM): Кудько Николай Витальевич +380676274424
 */