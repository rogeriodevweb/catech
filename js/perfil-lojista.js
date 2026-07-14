const dadosLoja = {

    loja:"CA Tech",

    responsavel:"",

    email:"",

    telefone:"",

    cnpj:"",

    endereco:"",

    site:"",

    instagram:"",

    facebook:"",

    pix:""

};

document.getElementById("loja").value = dadosLoja.loja;
document.getElementById("responsavel").value = dadosLoja.responsavel;
document.getElementById("email").value = dadosLoja.email;
document.getElementById("telefone").value = dadosLoja.telefone;
document.getElementById("cnpj").value = dadosLoja.cnpj;
document.getElementById("endereco").value = dadosLoja.endereco;
document.getElementById("site").value = dadosLoja.site;
document.getElementById("instagram").value = dadosLoja.instagram;
document.getElementById("facebook").value = dadosLoja.facebook;
document.getElementById("pix").value = dadosLoja.pix;

document.getElementById("salvar").addEventListener("click",()=>{

    alert("Perfil atualizado com sucesso!");

});