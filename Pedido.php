<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Made with Thimble</title>
  <link rel="stylesheet" href="CSS.css">
  <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
  <script src="Metodos.js"></script>
</head>

<body>
  <header class="comeco">

    <h1>Criptografia de Cesar</h1>
  </header>
  <section class="Informaçoes">
    <div class="flex">
      <div class="input">
        <br>
        <label class = "legend" for="Endereco flex_one"> Frase: </label>
        <input id = "frase" class="flex_one idados" type="text" size="40" />
      </div>
      <div class="input">
        <br>
        <label class = "legend" for="Celular flex_one"> Rotatividade: </label>
        <input id="route"class = "idados flex_one" type="number"/>
      </div>
    </div>
    <br><br><br>
  </section>
  <div class ="cupom">
<button class = "enviar" onclick= "criptografar()" value="Exibir Alert" id ="botao">Criptografar</button>
<button class = "enviar" onclick= "descriptografar()" value="Exibir Alert" id ="botao">Descriptografar</button>
</div>

<div id="result">
  <br>
<h2>Resultado: </h2>
</div>
</body>
</html>