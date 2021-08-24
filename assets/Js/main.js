// let childUL = document.querySelector(".Home-1").children;
let iClickTrans = document.querySelectorAll(".Home__category--item");
let allIarrow = document.querySelectorAll(".Home i.fa-chevron-down");
let mainE = document.getElementById("main");

let index1; //index so sánh làm biếng để lưu cái index của cái home__Category--items mà mình click vô so sánh với cái click ở sau
let transformIndex;
let flatfon = document.querySelector(".platform");
// console.log(flatfon);
let addBlock = function (index) {
  if (index == 0) flatfon.classList.add("displayBlock");
};
let removeBlock = function (index) {
  if (index == 0 || index == 1 || index == 2 || index == 3 || index == 4)
    flatfon.classList.remove("displayBlock");
};
let toggleHien = function (element) {
  if (element.currentTarget.classList.contains("hien")) {
    element.currentTarget.classList.remove("hien");
  } else {
    element.currentTarget.classList.add("hien");
  }
};
let addAndRemoveBlock = function (e, index) {
  removeBlock(index);
  if (e.currentTarget.classList.contains("hien")) {
    addBlock(index);
  }
};
let tranformIArrowE = function (arr) {
  arr.map((e) => {
    let arr2 = [...e.children];

    arr2.map((e) => {
      if (e.parentElement.parentElement.classList.contains("hien")) {
        e.classList.add("transtrom180_acti");
        mainE.classList.add("opacity__active");
      } else if (!e.parentElement.parentElement.classList.contains("hien")) {
        mainE.classList.remove("opacity__active");
      }
    });
  });
};
iClickTrans.forEach((event, index) => {
  // console.log(Math.random());
  event.addEventListener("click", function (e) {
    let currentItem = e.currentTarget.children;
    let cu = e.currentTarget;
    iClickTrans.forEach((e) => {
      if (index1 == cu) {
        return;
      } else {
        e.classList.remove("hien");
      }
    });
    toggleHien(e);
    index1 = e.currentTarget;
    addAndRemoveBlock(e, index);
    /* transform  i(arrow )in nav js */
    let arr = [...currentItem];
    //remove tất cả class transtrom
    allIarrow.forEach((e) => {
      e.classList.remove("transtrom180_acti");
    });
    //kiem tra xem nếu có lớp class(.hien)thì ta để còn ko remove luôn
    tranformIArrowE(arr);
    // tranformIArrowE();
  });
});

/* click button reponsive */
let ulE = document.querySelector(".Home__category--button ul");
let liEs = document.querySelectorAll(".Home__category--button ul li");
let buttonReFun = function () {
  let liEsArr = [...liEs];
  ulE.classList.toggle("tranform360");
  for (let i = 0; i < liEsArr.length; i++) {
    if (i == 0 && liEsArr[i].classList.contains("tranform45")) {
      liEsArr[i].classList.remove("tranform45");
    } else if (i == 0 && !liEsArr[i].classList.contains("tranform45")) {
      liEsArr[i].classList.add("tranform45");
    }

    if (i == 2 && liEsArr[i].classList.contains("tranform45re")) {
      liEsArr[i].classList.remove("tranform45re");
    } else if (i == 2 && !liEsArr[i].classList.contains("tranform45re")) {
      liEsArr[i].classList.add("tranform45re");
    }
  }
};
ulE.addEventListener("click", function (e) {
  buttonReFun();
});
//   console.log([...arr]);

/*transform text in slider img */
let tranTextE = document.querySelector(".transftext");

let test2 = document.querySelector(".Home__icon");

// test2.addEventListener("click", function (e) {
//   console.log(e.target);
// });
let arr = ["skills", "processes", "teams", "products", "workflows"];
let i = 0;
let transFormTextFunc = function () {
  tranTextE.innerText = arr[i];
  if (tranTextE.classList.contains("ani")) {
    tranTextE.classList.remove("ani");
  }
  tranTextE.classList.add("ani");
  i++;
  if (i > arr.length - 1) i = 0;
};
setInterval(function () {
  transFormTextFunc();
}, 3000);

//scroll visibility element
let getAllCoures = document.querySelectorAll(".animate");
// console.log(getAllCoures);
window.addEventListener("scroll", function () {
  let getAllCoures = document.querySelectorAll(".animate");

  let vh = window.innerHeight;

  getAllCoures.forEach((e) => {
    let topCoure = e.getBoundingClientRect().top;
    let topPoint = (120 / 100) * vh;
    if (topCoure < topPoint) {
      // console.log(topCoure, topPoint);
      e.classList.add("active");
    } else {
      // console.log(topCoure, topPoint);
      e.classList.remove("active");
    }
  });
});
/*test setporerty click */

///cách get css property nè
// console.log([flatfon]);
const styleFlatform = getComputedStyle(flatfon);
const displayFlatform = styleFlatform.display;

//hieu ung doi anh slider dep
let linkImage = [
  "https://c.wallhere.com/photos/f7/82/futuristic_tech_geometry-1330193.jpg!d",
  "https://zicxa.com/vi//uploaded/files/hinh-nen-4k-dep-cho-may-tinh-laptop-ipad-dien-thoai-di-dong-57.jpg",
  "https://zicxa.com/vi//uploaded/files/hinh-nen-4k-dep-cho-may-tinh-laptop-ipad-dien-thoai-di-dong-49.jpg",
  "https://zicxa.com/vi//uploaded/files/hinh-nen-4k-dep-cho-may-tinh-laptop-ipad-dien-thoai-di-dong-43.jpg",
  "https://c.wallhere.com/photos/f7/82/futuristic_tech_geometry-1330193.jpg!d",
];

// let imageInsert = document.querySelector(".slider__images");
// for (let i = 0; i < linkImage.length; i++) {
//   let imgSoure = `<img src=${linkImage[i]} alt="" />`;
//   // console.log(imgSoure);
//   imageInsert.insertAdjacentHTML("afterbegin", imgSoure);
// }

///test tinng
// let formE = document.querySelector(".form");
// formE.addEventListener("change", function (e) {
//   let optionEs = document.querySelectorAll(".lass");
//   if (e.target.name === "fav_language") {
//     console.log(e.target.value);
//   } else console.log("chọn sai");
// });
//mình sẽ tạo mớ mảng list menu ở đây
let menu1 = document.querySelector(".platform");
let menuLists = [];
let removeAllWhenClickOutSite = function (e1) {
  menu1.classList.remove("displayBlock");
  e1.classList.remove("hien");
  mainE.classList.remove("opacity__active");
  allIarrow.forEach((e) => {
    e.classList.remove("transtrom180_acti");
  });
};

let handleFunctionClickRemoveOnBody = function (e) {
  iClickTrans.forEach((e1, index) => {
    // console.log(e1);
    if (
      e.target.closest(".Home__category--item") ||
      e.target.closest(".platform")
    ) {
      return;
    } else if (e.target.closest("body")) {
      removeAllWhenClickOutSite(e1);
    }
  });
};
document.addEventListener("click", function (e) {
  handleFunctionClickRemoveOnBody(e);
});

///lick lênh màn hình sẽ hiện chấm đỏ
document.querySelector("body").addEventListener("click", function (e) {
  console.log(e.screenX, e.screenY, e.clientX, e.clientY);
  let div = document.createElement("div");

  div.style.width = 50 + "px";
  div.style.height = 50 + "px";
  div.style.backgroundColor = "red";
  div.style.position = "absolute";
  div.style.top = e.pageY + "px";
  div.style.left = e.pageX + "px";
  div.style.transform = "translate(-50%,50%)";
  div.style.borderRadius = 50 + "%";
  div.style.zIndex = "10000";
  div.style.transform = "scale(0)";
  div.style.transition = "all 2s";
  console.log(div);
  document.querySelector("body").insertAdjacentElement("afterbegin", div);
  setTimeout((e) => {
    div.style.transform = "scale(50)";
    div.style.opacity = 0;
    div.style.zIndex = "-1";
    setTimeout((e) => {
      div.remove();
    }, 5000);
  }, 1);
});
