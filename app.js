//togloomiin buh gazart asgugkag global huvisagchdiig end zarlay

//togloom duussan esehiig hadgalah toloviin huvisagch
var isNewGame;
var activePlayer;
//2r toglogchiin tsugluulsan onoonuud
var scores;
//idevhtei togologchiin tsugluulj bgaa eeljiin onoo
var roundScore;

var diceDom = document.querySelector(".dice");

//togloomiig ehluulne.
initGame();
//togloomiig shineer ehlehed beltgej baina.
function initGame() {
  //togloom ehellee gdgt tolovlt oruulna
  isNewGame = true;
  // Тоглогийн ээлжийг хадгалхах хувьсагч, 1дүгээр тоглогчийг 0, 2тоглогчийг 1гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадагалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;
  //program ehlehed beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //toglogchdiin neriig zaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}
// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
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
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт солиж өгнө.
      //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
      switchToNextPlayer();
    }
  } else {
    alert("togloom duuslaa new game deer darna uu!");
  }
});

//Hold тобчны эвент листенэр
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //ug toglogchiin tsugluulsan eeljnii onoog global onoon deer ni nemj ognoo.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    //ug toglogch hojson esehiig shalgah
    if (scores[activePlayer] >= 50) {
      //togloomiig duussan tolovt oruulna.
      isNewGame = false;
      //ylagch gsn textiig nerniihan orond gargana
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }

    //delgets deer onooog ni oorchilno
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //eeljiin onoog ni 0 teglej ogno.
    switchToNextPlayer();
  } else {
    alert("togloom duuslaa new game deer darna uu!");
  }
});

//ene funkts ni togloh eeljiig daraachiin toglogchruu shiljuuldeg
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //togologchiin eeljiig nogoo toglogch ruu shiljuulne.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //ulaan tseg shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //шоог түр алга болгоно.
  diceDom.style.display = "none";
}

//New game buyu shine togloom ehluuleh tovchnii event listner
document.querySelector(".btn-new").addEventListener("click", initGame);
