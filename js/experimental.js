// $(() => {
//   // console.log('this is WORKING');
//   // make icon array representing both src and value (to match later)
//   const icons = [
//     { src: "images/bass-guitar-pic.png", value: "bass" },
//     { src: "images/guitar.jpg", value: "guitar" },
//     { src: "images/keys-icon.png", value: "keys" },
//     { src: "images/mic-pic.png", value: "mic" },
//     { src: "images/drums.jpg", value: "drums" },
//     { src: "images/bass-guitar-pic.png", value: "bass" },
//     { src: "images/guitar.jpg", value: "guitar" },
//     { src: "images/keys-icon.png", value: "keys" },
//     { src: "images/mic-pic.png", value: "mic" },
//     { src: "images/drums.jpg", value: "drums" },

//     { src: "images/bass-guitar-pic.png", value: "bass" },
//     { src: "images/guitar.jpg", value: "guitar" },
//     { src: "images/keys-icon.png", value: "keys" },
//     { src: "images/mic-pic.png", value: "mic" },
//     { src: "images/drums.jpg", value: "drums" },
//     { src: "images/bass-guitar-pic.png", value: "bass" },
//     { src: "images/guitar.jpg", value: "guitar" },
//     { src: "images/keys-icon.png", value: "keys" },
//     { src: "images/mic-pic.png", value: "mic" },
//     { src: "images/drums.jpg", value: "drums" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/cash_pic.jpg", value: "cash" },
//     { src: "images/lazybandmate.png", value: "bandmate" },
//     { src: "images/lazybandmate.png", value: "bandmate" },
//     { src: "images/demanding-boss.jpg", value: "boss" }
//   ];
//   // loop randomly through array to populate grid with images paired with class.
//   // let randomIcon = icons[Math.floor(Math.random()*icons.length)];
//   let randomIcon = icons[Math.floor(Math.random() * icons.length)];
//   const newRandomIcon = () => {
//     randomIcon = icons[Math.floor(Math.random() * icons.length)];
//   };
//   // console.log(randomIcon);

//   // add image tag to each square
//   $(".square").append("<img>");

//   // function to assign random image paired with class to <img> tags
//   const assignRandomIconAndClass = () => {
//     for (i = 0; i < 64; i++) {
//       let $single = $("img").eq(i);
//       // console.log($single);
//       $single.addClass(randomIcon.value);
//       $single.attr("src", randomIcon.src);
//       newRandomIcon();
//     }
//   };
//   assignRandomIconAndClass();
//   // assignRandomIconAndClass();
//   // console.log($(column1[7]).hasClass('cash'));

//   // =============MAKE ARRAY FOR EACH COLUMN AND ROW:============

//   // ======================COLUMNS:=============================

//   // ==================COLUMN 1==================================
//   let column1 = [
//     $("img").eq(0),
//     $("img").eq(1),
//     $("img").eq(2),
//     $("img").eq(3),
//     $("img").eq(4),
//     $("img").eq(5),
//     $("img").eq(6),
//     $("img").eq(7)
//   ];
//   // ====================COLUMN 2===============================
//   let column2 = [
//     $("img").eq(8),
//     $("img").eq(9),
//     $("img").eq(10),
//     $("img").eq(11),
//     $("img").eq(12),
//     $("img").eq(13),
//     $("img").eq(14),
//     $("img").eq(15)
//   ];
//   // ===================COLUMN 3===============================
//   let column3 = [
//     $("img").eq(16),
//     $("img").eq(17),
//     $("img").eq(18),
//     $("img").eq(19),
//     $("img").eq(20),
//     $("img").eq(21),
//     $("img").eq(22),
//     $("img").eq(23)
//   ];
//   // ==================Column 4================================
//   let column4 = [
//     $("img").eq(24),
//     $("img").eq(25),
//     $("img").eq(26),
//     $("img").eq(27),
//     $("img").eq(28),
//     $("img").eq(29),
//     $("img").eq(30),
//     $("img").eq(31)
//   ];
//   // ==================Column 5================================
//   let column5 = [
//     $("img").eq(32),
//     $("img").eq(33),
//     $("img").eq(34),
//     $("img").eq(35),
//     $("img").eq(36),
//     $("img").eq(37),
//     $("img").eq(38),
//     $("img").eq(39)
//   ];
//   // ====================COLUMN 6=================================
//   let column6 = [
//     $("img").eq(40),
//     $("img").eq(41),
//     $("img").eq(42),
//     $("img").eq(43),
//     $("img").eq(44),
//     $("img").eq(45),
//     $("img").eq(46),
//     $("img").eq(47)
//   ];
//   // =======================Column 7=============================
//   let column7 = [
//     $("img").eq(48),
//     $("img").eq(49),
//     $("img").eq(50),
//     $("img").eq(51),
//     $("img").eq(52),
//     $("img").eq(53),
//     $("img").eq(54),
//     $("img").eq(55)
//   ];
//   // ====================COLUMN 8==============================
//   let column8 = [
//     $("img").eq(56),
//     $("img").eq(57),
//     $("img").eq(58),
//     $("img").eq(59),
//     $("img").eq(60),
//     $("img").eq(61),
//     $("img").eq(62),
//     $("img").eq(63)
//   ];

//   // make function for checking single column or row for neighbors:
//   let columnArray = [
//     column1,
//     column2,
//     column3,
//     column4,
//     column5,
//     column6,
//     column7,
//     column8
//   ];

//   let elementWithSwap = document.getElementsByClassName("image-swap");
//   let elementWithNext = document.getElementsByClassName("next-image");
//   console.log(elementWithSwap.length);
//   console.log(elementWithNext.length);

//   elementWithSwap = document.getElementsByClassName("image-swap");
//   elementWithNext = document.getElementsByClassName("next-image");
//   console.log(elementWithSwap.length);
//   console.log(elementWithNext.length);
//   // debugger;
//   let $current;
//   console.log("this is working");

//   $("img").on("click", event => {
//     if (elementWithSwap.length === 0 && elementWithNext.length === 0) {
//       // $current = $(event.currentTarget);
//       // console.log("you clicked this item");
//       // // console.log($current.attr('class'));
//       // let currentItemClass = $current.attr("class");
//       // let currentItemSrc = $current.attr("src");
//       // $current.addClass("image-swap");
//       // elementWithSwap = document.getElementsByClassName("image-swap");
//       // console.log(elementWithSwap.length);
//       // debugger;
//     }
//     // elementWithSwap = document.getElementsByClassName("image-swap") ;
//     else if (elementWithSwap.length > 0) {
//       // $("img").off("click");
//       // $("img").on("click", () => {
//       //   console.log("next clicked");
//       //   console.log($current.attr("class"));
//       // });
//     // }
//   });
// });
// // elementWithSwap = document.getElementsByClassName('image-swap')