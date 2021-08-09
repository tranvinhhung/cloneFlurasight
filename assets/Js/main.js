// let childUL = document.querySelector(".Home-1").children;
let iClickTrans = document.querySelectorAll(".Home__category--item");
let allIarrow = document.querySelectorAll(".Home i.fa-chevron-down");
console.log(allIarrow);
window.addEventListener("", function (e) {
  console.log(e.clientX, e.clientY);
});
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
let tranformIArrowE = function () {
  arr.map((e) => {
    let arr = [...e.children];

    arr.map((e) => {
      if (e.parentElement.parentElement.classList.contains("hien")) {
        e.classList.add("transtrom180_acti");
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
    arr.map((e) => {
      let arr = [...e.children];

      arr.map((e) => {
        if (e.parentElement.parentElement.classList.contains("hien")) {
          e.classList.add("transtrom180_acti");
        }
      });
    });
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

test2.addEventListener("click", function (e) {
  console.log(e.target);
});
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

/*test setporerty click */

///cách get css property nè
// console.log([flatfon]);
const styleFlatform = getComputedStyle(flatfon);
const displayFlatform = styleFlatform.display;
