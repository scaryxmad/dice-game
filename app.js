// Тоглогийн ээлжийг хадгалхах хувьсагч, 1дүгээр тоглогчийг 0, 2тоглогчийг 1гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадагалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

//program ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  //Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  //буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  //Буусан тоо нь 1ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    //1ээс ялгаатай тоо буулаа. буусан тоог тоглогчид нэмж өгнө
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт солиж өгнө.

    //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //togologchiin eeljiig nogoo toglogch ruu shiljuulne.
    //хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
    //үгүй бол идэвхтэй тогологчийг 0 болго.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //ulaan tseg shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //шоог түр алга болгоно.
    diceDom.style.display = "none";
  }
});
