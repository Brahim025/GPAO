/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function rechercheDynamicParam00001(inp, val){
    var texte = $('[id$='+inp+']').val();
    var texteUpper = texte.toUpperCase();
    var texteLower = texte.toLowerCase();
    $('div[id$='+val+'] div').hide();
    $('div[id$='+val+'] div'+":contains-ci('"+texte+"')").show();
    $('div[id$='+val+'] div'+":contains-ci('"+texteUpper+"')").show();
    $('div[id$='+val+'] div'+":contains-ci('"+texteLower+"')").show();
    $('div[id$='+val+'] div'+":contains-ci('"+texteMajuscule(texte)+"')").show();
}
function rechercheDynamicParam(inp, val){
    alert('bolbol');
    var texte = $('[id$='+inp+']').val();
    var texteUpper = texte.toUpperCase();
    var texteLower = texte.toLowerCase();
    $('div[id$='+val+'] table tbody tr').hide();
    $('div[id$='+val+'] table tbody tr'+":contains-ci('"+texte+"')").show();
    $('div[id$='+val+'] table tbody tr'+":contains-ci('"+texteUpper+"')").show();
    $('div[id$='+val+'] table tbody tr'+":contains-ci('"+texteLower+"')").show();
    $('div[id$='+val+'] table tbody tr'+":contains-ci('"+texteMajuscule(texte)+"')").show();
}
function rechercheDynamicHTable(inp, val){
    var texte = $('[id$='+inp+']').val();
    var texteUpper = texte.toUpperCase();
    var texteLower = texte.toLowerCase();
    $('[id$='+val+'] tbody tr').hide();
    $('[id$='+val+'] tbody tr'+":contains-ci('"+texte+"')").show();
    $('[id$='+val+'] tbody tr'+":contains-ci('"+texteUpper+"')").show();
    $('[id$='+val+'] tbody tr'+":contains-ci('"+texteLower+"')").show();
    $('[id$='+val+'] tbody tr'+":contains-ci('"+texteMajuscule(texte)+"')").show();
}
function rechercheDynamicHTable02(inp, val){
    var texte = $('[id$='+inp+']').val();
    var texteUpper = texte.toUpperCase();
    var texteLower = texte.toLowerCase();
    $('[id$='+val+'] tbody tr td').hide();
    $('[id$='+val+'] tbody tr td'+":contains-ci('"+texte+"')").show();
    $('[id$='+val+'] tbody tr td'+":contains-ci('"+texteUpper+"')").show();
    $('[id$='+val+'] tbody tr td'+":contains-ci('"+texteLower+"')").show();
    $('[id$='+val+'] tbody tr td'+":contains-ci('"+texteMajuscule(texte)+"')").show();
}

$.extend($.expr[":"], 
{
    "contains-ci": function(elem, i, match, array){
        return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});
/*-------------- Optimiser la saisie des lignes des pi�ces commerciales -------------*/
                                            

