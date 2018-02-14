<?php

/*
Ожидание сведений
Статус присваивается при ожидание от клиентов информации для возможности принятия решения
"ria_Type": "b",
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
    "opCode": "waitInfo",
    "request": {
        "req_ID": "Z1815PB70000B8"
    },
    "actionLst": [
        {
            "ria_Type": "b",
            "ria_Comment": "1) документи, що підтверджують сплату витрат на рятування майна; 2) фотокартки пошкодженого майна; 3) технічний паспорт на нерухоме майно, що містить основні відомості про нього: місцезнаходження, склад,технічні характеристики, план та опис обєкта, наявність самочинного будівництва, перепланування тощо; 4) Паспорт та ІНПП Страхувальника, а, також копії документів, що підтверджують страховий інтерес Страхувальника (Вигодонабувача) —право власності, найму, управління тощо 5) перелік знищеного, пошкодженого майна із зазначенням його вартості; 6) кошторис на відновлення майна, калькуляцію збитків; 7) пояснення, чому невчасно повідомлено про подію (подія трапилась 22.01.2018 - написана заява 05.02.2018року).",
	        "ria_DatE": "2018-02-12T23:59:59.000"
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