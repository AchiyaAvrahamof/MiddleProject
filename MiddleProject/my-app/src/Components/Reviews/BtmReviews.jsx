import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Reviews from "./Reviews";
import "./Reviews.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function BtmReviews() {
  const [counter, setCounter] = useState(1);
  const reviewsStr = [
    {
      name: "עינב ועופרי",
      discripion:
        "נדב היקר וכל צוות חוה ואדם! התחתנו ב16.6.16 בחתונת טבע במושב תלמי אלעזר. אנחנו רוצים לפרגן ולומר המון המון תודה על אירוע מ-ו-ש-ל-ם שחלק משמעותי מאוד ממנו הוא בזכותכם. תודה רבה על שירות אדיב, מענה אנושי ומקצועיות שאין כמותה! זכינו לעבור את החוויה הזאת- של להפיק חתונה, עם אנשי מקצוע שהם קודם כל בני אדם מדהימים וכמובן כמובן, אנשי מקצוע ברמה הגבוהה ביותר. אנחנו מקבלים המון תגובות חיוביות על כל היופי, האושר והכיף שהיה באירוע אבל יותר חשוב מזה- אנחנו מרוצים מעל לכל ציפיה. הרבה תודה על הכל ובין היתר- על הגרילנדות שהרימו את המקום, על הבר המשוגע-  שלא מפסיק לגרוף מחמאות ושאלות וכמובן על כל הטוב שהוספתם לחוויה כולה. אז לכל מי שהגיע לכאן וקורא את חוות הדעת הזאת- פשוט אל תחשבו פעמיים. מומלץ בחום רב!!! עינת ועפרי :) ",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2016/06/K6A2328.jpg.webp",
    },
    {
      name: "גליה וטל",
      discripion:
        "אחת ההחלטות הטובות ביותר בארגון החתונה שלנו היה לבחור בנדב וחוה ואדם.. הכל התנהל ברוגע, בכיף ובמקצועיות בלתי מתפשרת, נדב דאג שהכל יהיה כמו שאנחנו רוצים ואוהבים, והחתונה הייתה פשוט מושלמת! הכל תיקתק ואנחנו נהננו בטירוף! תודה רבה רבה!",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2016/07/86-3.jpg.webp",
    },
    {
      name: "לירון ואופיר",
      discripion:
        "בפגישה הראשונה עם נדב הסברנו בכמה מילים על הקונספט המעט שונה שיש לנו בראש לחתונה שלנו, ולמרות שאפילו לחברים ולמשפחה היה קשה להבין, נדמה היה שנדב נכנס לראש שלנו ממש מיד ועם החיוך האופייני כבר התחיל להריץ רעיונות. היה לנו ברור שהוא האדם בשבילנו. בכל תקופת ההכנות היינו איתו בקשר רציף ומלבד הספקים הרגילים שמצא במחירים יותר מהוגנים (וברמה גבוהה מאד), הוא מצא לנו גם את כל מה שחיפשנו שלא נמצא ב״חבילת החתונה הבסיסית״. לא היה רגע שלא היינו מרוצים או חששנו ואכן ברגע האמת הכל היה פשוט מ-ו-ש-ל-ם. החל מההקמה ביום לפני, ועד לתפעול האירוע ביום עצמו- לא דאגנו לדבר והכל היה בדיוק אחד לאחד מה שדמיינו וחלמנו עליו.  שבוע אחרי ואנחנו עדיין מקבלים המון מחמאות על הערב ואין ספק שלחוה ואדם יש חלק מהותי בכולן.  מקצוענים, אמינים ובעיקר מקסימים!!!",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2017/09/IMG_3494.jpg.webp",
    },
    {
      name: "הדר וליאור",
      discripion:
        "אז איך מתחילים?! אני וליאור הגענו לנדב, אחרי שהדברים לא עבדו לטובתנו. אבל כמו שכולם אומרים - הכל לטובה, וכך היה. פגשנו את נדב, וידענו שהוא האדם עליו יהיה אפשר לסמוך בארגון האירוע הזה! כמו כל זוג, היו לנו מצבי רוח משתנים, ונדב תמיד ידע מה להגיד, איך להרגיע אותנו, ותמיד אמר - היום הזה יהיה בדיוק כמו שאתם מדמיינים, אם צריך לחפש עוד, נחפש נדב עשה מעל ומעבר כדי שנהיה מאושרים ולחלוטין הפך למשפחה! אם עד יום החתונה חשבנו שנדב והצוות שלו הם 10 מתוך 10, ביום החתונה הבנו שהם הרבה מעבר לזה! נדב והצוות שלו, שמורכב מאנשים מדהימים, נתנו את הכל מהלב, והרימו אירוע בטבע ברמה יותר גבוהה ממה שדמיינו - תאורה שהרימה את המקום בכמה ובכמה רמות למעלה, הגברה משוגעת ויחס שאין שני לו - לא היינו צריכים להתעסק בכלום, הכל תקתק ועבד כמו שצריך, תשומת לב לפרטים הקטנים - שירותים נקיים, מתחם נקי ועוד שיגועים קטנים מאד כמו - להעביר ספות ומראות ממקום אחד לשני.) )",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2017/09/2X5A1787.jpg.webp",
    },
    {
      name: "נטע ואליאור",
      discripion:
        "אירוע בלתי נשכח... צוות משקיע שנתת את הדם והזיעה בהקמת האירוע ליווי מושלם בתהליך שהופך את בניית האירוע הזו לחוויה נהדרת. נדב נועם והצוות היו אדיבים ורגישים ופשוט הגשימו לנו את כל החלומות במינימום זמן מינימום כסף ומקסימום חיוך! היה לנו לעונג",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2018/05/%D7%90%D7%9C%D7%A2%D7%93%D7%95-9-of-9.jpg.webp",
    },
    {
      name: "שירלי ואלי",
      discripion:
        "הייתה ללא ספק הבחירה המושלמת בשבילנו לאלו שיהיו אחראים על הפקת החתונה. העבודה מולם הייתה נעימה, והם נתנו הרגשה שיש על מי לסמוך. במבחן התוצאה - זה התעלה על הציפיות שלנו (וזאת למרות תנאי מזג אוויר מאתגרים ביותר). תודה רבה על הכל! אוהבים שירלי ואלי",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/03/11-1.jpg.webp",
    },
    {
      name: "מור ויהודה",
      discripion:
        "רגע לפני שאנחנו טסים רצינו עוד להגיד תודה לכל מי שעזר לחתונת החלום שלנו להתגשם ואם כולכם עפתם על החתונה הזאת כמונו אז לכו לעמוד שלהם לעשות לייק ותוכלו לראות מה עוד הם יודעים לעשות. קודם כל איש של בשר או בשמו הפרטי Neria Granevich שהוא מעל להכל אח בלב ומעבר לזה איש מקצוע אמיתי בכל מה שנוגע לבשר וקייטרינג. לא חושבת שיש מישהו בחתונה הזאת שיכל להגיד שהאוכל היה פחות ממדהים. ואם כבר אוכל אז גם מאחורי העוגה המשוגעת שלנו והנשיקות הממותגות עומדת, אורית גרנביץ' בעלת ידי הזהב ויכולת הקצפת הביצים המרשימה שראיתי בחיי. כמובן שבשביל להרים את הדבר הזה היינו צריכים גם מפיק רציני שמכיר את השטח, פה Nadav Natanzon נכנס לתמונה עם חוה ואדם - הפקת חתונות בטבע, ועם הואן-נגילה שגרמו לכל החלום לרקום עור וגידים, ומהר! וכדי לקבל את הצורה הסופית והמעוצבת בכל הסטייל הזה הרמנו טלפון ל TREND- Events Design שהיא בכלל Limor Ram המדהימה שצבעה את הכל בצבעי השמש והחמניות. כמו שכולכם כבר יודעים Dalit Rechester הייתה האלוהים שלנו על הרחבה עד שעות השקיעה ו Inbal Raviv Bridal עמלה שעות על הלוק המושלם שלי כדי שאהיה אחת ומיוחדת ביום הזה. כל הספקים שלנו נתנו מחירים הוגנים, שירות מדהים וחיוכים בכל פעם שרק ניג'סנו , אז אם אתם מתלבטים יש לנו המלצה חמה, אך ורק הם!!!!!",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/03/1040548.jpg.webp",
    },
    {
      name: "דפי ורון",
      discripion:
        "לפני תשעה חודשים נפגשנו ביער עם נדב והחיוך הגדול שלו, ומייד ידענו שהוא האדם שנרצה שיפיק לנו את חתונת החלומות שלנו. בתקופה זו הוא ליווה אותנו, תמך בנו והיה קשוב וסבלני לכל בקשה והתעקשות שלנו. נדב תיאם באופן מושלם בין הספקים הרבים הדרושים לחתונת שטח ובין הרצונות שלנו. במהלך הארגונים החלפנו מקום, שינינו המון דברים ותמיד נדב היה שם, עזר לנו בבחירות ובהחלטות מכל הסוגים והתאמץ עד שנהייה לגמרי מרוצים. ובאמת החתונה שלנו הייתה מעבר לכל מה שיכולנו לדמיין לעצמנו מבחינת ארגון, עיצוב, נוחות ואווירה! כל האורחים החמיאו על ההקפדה בפרטים הקטנים והגדולים, החל מהתאורה, השרותים המעוצבים והממוזגים ועד לבמת הריקודים שהוקמה באמצע היער. במהלך החתונה נדב והצוות המסור דאגו שהכל יתקתק כמו שצריך והקפידו שלא נתעסק בשום דבר חוץ מלהינות. יש להם את החלק הגדול ביותר בכך ואין לנו ספק שבלעדיהם החתונה הייתה אחרת לגמרי. אם אתם מחפשים להפיק חתונת שטח נדב הוא האדם בשבילכם!",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/03/%D7%90%D7%9C%D7%A2%D7%93%D7%95-214-of-1107-1.jpg",
    },
    {
      name: "מור ושגיב",
      discripion:
        "כשאני ובן זוגי כמעט התייאשנו מלחפש מישהו שיפיק לנו את האירוע מרחוק, בגלל העובדה שאנחנו לא גרים בארץ, מצאנו את חוה ואדם שעזרו לנו להבין שהכל אפשרי!! מהשיחה הראשונה עם נדב ידענו שהוא היחיד שנוכל לסמוך עליו שהיום שלנו יהיה הכי מושלם שאפשר! ההתנהלות מול נדב הייתה קלילה, כל בקשה נענתה בחיוב וחיוך (והיו הרבה בקשות) והכי חשוב, בעיניי, הוא היה זמין בכל יום ושעה! ההוכחה לכך היא שלא היה לנו שום דבר שהתפקשש ביום האירוע (וזה כמעט ולא קורה באף חתונה!!) אין ספק שהייתי בוחרת בהם שוב ושוב ושוב! תודה לכם",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/03/Ceremony-11-1.jpg",
    },
    {
      name: "עדי ונועם",
      discripion:
        "החלום שלי תמיד היה להתחתן בקיבוץ ובכל תעשיית החתונות הזו, היה נדמה בהתחלה שזה לא אפשרי, ואז פגשנו את נדב ואיזה מזל שפגשנו! קודם כל הוא וכל הצוות שלו הם אנשי מקצוע ברמה הכי גבוהה שיש, נדב ליווה אותנו ותמך בנו מהפגישה הראשונה, לכל בעיה או שאלה שהייתה תמיד היה זמין כאילו אנחנו הזוג היחיד, תמיד מצא פתרון והכל תמיד מלווה בחיוך ענק! החתונה עצמה הייתה מעל ומעבר למה שציפינו, האירוע תקתק ונדב תיאם בין כל הספקים ותמיד דאג לנו, כל כך התרגשנו לראות את החלום הופך למציאות! נדב והצוות האדיר שלו הגשימו לנו ( בעיקר לי חחח) חלום ילדות ולא היינו מצליחים לעשות זאת בלעדיו!! אם אתם מחפשים לחגוג את היום שלכם בצורה בלתי נשכחת וייחודית, כזו שתרגישו שרק לכם יכולה להיות חווית חתונה כזו, אל תתלבטו בכלל ותקבעו עם חוה ואדם!! אנחנו רוצים להודות שוב מכל הלב לנדב והצוות האדיר שלו על חתונה חד פעמית ובלתי נשכחת ❤",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/03/a_n_-103-1.jpg",
    },
    {
      name: "ענבר ורז-נטף",
      discripion:
        "התחתנו בחצר של ההורים, מכיוון שהיינו קצרים בזמנים (חודשיים וחצי) היינו עם המון חששות שלא נספיק... ואז פגשנו את נדב!! שמהפגישה הראשונה הבנו שיש על מי לסמוך ,לאורך כל הדרך נדב היה שם לתמוך, לעזור, להתייעץ ולבחור ספקים תותחיים!! כל זה ברוגע ועם חיוך גדול! יום החתונה היה מושלםםםם והרבה מזה בזכות נדב וכל צוות חוה ואדם המדהימים! ממליצה בחום❤",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/03/Inbar_Raz_%D7%91%D7%97%D7%99%D7%A8%D7%AA_%D7%94%D7%A6%D7%9C%D7%9D_472.jpg.webp",
    },
    {
      name: "שחר ואנה",
      discripion:
        "לפני שנספר כמה מקצועיים, רציניים, ראש גדול, מתקתקים, חשוב לנו להגיד כמה נדב והצוות שלו נחמדים! פשוט כיף לעבוד עם אנשים שאוהבים את מה שהם עושים ואוהבים עוד יותר להעלות חיוך על הפנים של האנשים שהם עובדים איתם. מעבר לכך: מקצועיים, יצירתיים, תופרים פינות, ועוזרים. פשוט מדהימים. מהרגע הראשון שפגשנו אותם ידענו שאיתם אנחנו סוגרים, רק צריך למצוא את הלוקיישן המתאים. לא יכולנו לבקש יותר מההפקה שלנו והם מומלצים בכל רמה שאפשר. פשוט מדהימים. שחר ואנה",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/03/%D7%90%D7%95%D7%93%D7%99-%D7%9E%D7%95%D7%A6%D7%A0%D7%99-%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%90%D7%A0%D7%94-%D7%95%D7%A9%D7%97%D7%A8-6508.jpg.webp",
    },
    {
      name: "שי ואיתן",
      discripion:
        "איתן ואני התחתנו בבית בבני ציון, הגענו לנדב דרך חברים, חווה ואדם נתנו מענה לכל הצרכים והבקשות המיוחדות שלנו. עוד בשלב ההכנות נדב ואנשיו הוכיחו יעילות מקצועיות והמון איכפתיות ורגישות. האירוע עצמו התנהל בצורה מושלמת ומתוקתקת בניצוחו נדב. השטח אורגן ועוצב וצורה מקסימה בדיוק כמו שרצינו עם תשומת לדברים הקטנים .נדב לא נתן לנו לדאוג משום דבר...ודאג שנהנה גם מההכנות לפני! הצוות הרים תאורה מדהימה! ונדב והצוות היו קשובים אלינו לאורך כל התהליך אל כל בקשה הכי קטנה שהייתה לנו. באמת שנהננו מכל רגע, היינו ממליצים לכל זוג שישאל לבחור כמונו.",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/04/7L9A5275.jpg",
    },
    {
      name: "נטע וסלב",
      discripion:
        "ל״חוה ואדם״ הגענו במקרה, חיפשנו מפיק לאירוע הקטן שלנו בגינה של ההורים, היה חשוב לנו שיהיה מישהו שיבין את הראש שלנו, את הפשטות והאינטימיות שאנחנו רוצים באירוע, ובעיקר מישהו שילך איתנו בהכל ושלא ינסה להניע לכיוונים אחרים. כבר בפגישה הראשונה עם נדב היה ברור לנו שהוא האחד לפגישה הוא הגיע מצוייד בחיוך גדול, הסביר וענה על שאלות בפשטות ונעימות, הרגשנו שהוא מקשיב לנו והולך איתנו בכל רעיון ודבר. מסע הארגון של האירוע נעשה באווירה נעימה, הייתה תמיד הרגשה שהכל בשליטה, ותמיד הרגשנו שאנחנו בידיים טובות! באירוע עצמו היה פשוט מושלם! הכל זרם ותקתק בדיוק כמו שצריך, נדב היה שם לארגן הכל, כמובן עם חיוך גדול על פניו! היה מהמם ומדהים ובאמת שלא היינו משנים שום דבר גם אם היינו עושים את זה שוב! אז תעשו לעצמכם טובה, תפסיקו לחפש! נדב והצוות המקסים שלו- אלו בדיוק האנשים שאתם רוצים שם איתכם ביום המיוחד שלכם!",
      image:
        "https://www.havaveadam.co.il/wp-content/uploads/2019/05/Netta-Slav-1027.jpg",
    },
  ];

  function navigetinReviews(whatClicked) {
    if (whatClicked === 1) {
      if (counter !== 1) setCounter(counter - 1);
      else setCounter(reviewsStr.length - 2);
    }
    if (whatClicked === 2) {
      if (counter !== reviewsStr.length - 2) setCounter(counter + 1);
      else setCounter(1);
    }
  }

  return (
    <div className="Home-reviews">
      <div className="comlete">
        <Button
          onClick={() => {
            navigetinReviews(1);
          }}
        >
          <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
        </Button>
        <Grid container columnSpacing={{ xs: 3, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Reviews
              name={reviewsStr[counter - 1].name}
              discripion={reviewsStr[counter - 1].discripion}
              image={reviewsStr[counter - 1].image}
              counter={counter - 1}
              setCounter={setCounter}
              nav={navigetinReviews}
              reviewsStrb={reviewsStr.length - 1}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Reviews
              name={reviewsStr[counter].name}
              className="two-off"
              discripion={reviewsStr[counter].discripion}
              image={reviewsStr[counter].image}
              counter={counter}
              setCounter={setCounter}
              nav={navigetinReviews}
              reviewsStrb={reviewsStr.length - 1}
            />
          </Grid>
          <Grid
            item
           
            sm={12}
            md={12}
            lg={4}
            display="flex"
            justifyContent={"center"}
            className="one-off"
          >
            <Reviews
              name={reviewsStr[counter + 1].name}
              discripion={reviewsStr[counter + 1].discripion}
              image={reviewsStr[counter + 1].image}
              counter={counter + 1}
              setCounter={setCounter}
              nav={navigetinReviews}
              reviewsStrb={reviewsStr.length - 1}
            />
          </Grid>
        </Grid>
        <Button
          onClick={() => {
            navigetinReviews(2);
          }}
        >
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </Button>
      </div>
    </div>
  );
}

export default BtmReviews;
