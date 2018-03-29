// По ИД убытка ПРивата

var xhr = new XMLHttpRequest();
var params = 'ext_id=Z182MPB70000BN';
xhr.open("POST", 'cis/utils/get_ext_status', true);

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
xhr.send(encodeURI(params));

//-----------------------------------------------------------------------------------------------------------

// За даты
/*

var xhr = new XMLHttpRequest();
var params = 'app_state_dt_from=201802020000&&app_state_dt_to=201802022359';
xhr.open("POST", 'cis/utils/get_ext_status', true);

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); 
xhr.send(encodeURI(params));

/**/