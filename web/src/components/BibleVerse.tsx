'use client';
import { useState } from 'react';

// Common verse lookup - a subset of frequently cited verses in catechisms/apologetics
const VERSE_TEXT: Record<string, { zh: string; en: string }> = {
  "Gen 1:1": { zh: "起初，神创造天地。", en: "In the beginning God created the heavens and the earth." },
  "Gen 1:26": { zh: "神说：「我们要照着我们的形像，按着我们的样式造人。」", en: "Then God said, \"Let us make man in our image, after our likeness.\"" },
  "Gen 1:27": { zh: "神就照着自己的形像造人，乃是照着他的形像造男造女。", en: "So God created man in his own image, in the image of God he created him; male and female he created them." },
  "Gen 2:7": { zh: "耶和华神用地上的尘土造人，将生气吹在他鼻孔里，他就成了有灵的活人。", en: "Then the LORD God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature." },
  "Gen 2:17": { zh: "只是分别善恶树上的果子，你不可吃，因为你吃的日子必定死。", en: "But of the tree of the knowledge of good and evil you shall not eat, for in the day that you eat of it you shall surely die." },
  "Gen 3:6": { zh: "于是女人见那棵树的果子好作食物，也悦人的眼目，且是可喜爱的，能使人有智慧，就摘下果子来吃了；又给她丈夫，她丈夫也吃了。", en: "So when the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took of its fruit and ate, and she also gave some to her husband who was with her, and he ate." },
  "Ex 20:1-17": { zh: "神吩咐这一切的话说……（十诫全文）", en: "And God spoke all these words, saying... (The Ten Commandments)" },
  "Deut 6:4": { zh: "以色列啊，你要听！耶和华我们神是独一的主。", en: "Hear, O Israel: The LORD our God, the LORD is one." },
  "Ps 19:1": { zh: "诸天述说神的荣耀；穹苍传扬他的手段。", en: "The heavens declare the glory of God, and the sky above proclaims his handiwork." },
  "Ps 73:25-28": { zh: "除你以外，在天上我有谁呢？除你以外，在地上我也没有所爱慕的。", en: "Whom have I in heaven but you? And there is nothing on earth that I desire besides you." },
  "Ps 100:3": { zh: "你们当晓得耶和华是神！我们是他造的，也是属他的；我们是他的民，也是他草场的羊。", en: "Know that the LORD, he is God! It is he who made us, and we are his; we are his people, and the sheep of his pasture." },
  "Isa 53:6": { zh: "我们都如羊走迷，各人偏行己路；耶和华使我们众人的罪孽都归在他身上。", en: "All we like sheep have gone astray; we have turned—every one—to his own way; and the LORD has laid on him the iniquity of us all." },
  "Matt 28:19": { zh: "所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。", en: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." },
  "John 1:1": { zh: "太初有道，道与神同在，道就是神。", en: "In the beginning was the Word, and the Word was with God, and the Word was God." },
  "John 3:16": { zh: "神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。", en: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life." },
  "John 14:6": { zh: "耶稣说：「我就是道路、真理、生命；若不藉着我，没有人能到父那里去。」", en: "Jesus said to him, \"I am the way, and the truth, and the life. No one comes to the Father except through me.\"" },
  "Acts 2:38": { zh: "你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵。", en: "Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit." },
  "Rom 1:20": { zh: "自从造天地以来，神的永能和神性是明明可知的，虽是眼不能见，但藉着所造之物就可以晓得，叫人无可推诿。", en: "For his invisible attributes, namely, his eternal power and divine nature, have been clearly perceived, ever since the creation of the world, in the things that have been made." },
  "Rom 3:23": { zh: "因为世人都犯了罪，亏缺了神的荣耀。", en: "For all have sinned and fall short of the glory of God." },
  "Rom 5:8": { zh: "惟有基督在我们还作罪人的时候为我们死，神的爱就在此向我们显明了。", en: "But God shows his love for us in that while we were still sinners, Christ died for us." },
  "Rom 6:23": { zh: "因为罪的工价乃是死；惟有神的恩赐，在我们的主基督耶稣里，乃是永生。", en: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord." },
  "Rom 8:28": { zh: "我们晓得万事都互相效力，叫爱神的人得益处。", en: "And we know that for those who love God all things work together for good." },
  "Rom 11:36": { zh: "因为万有都是本于他，倚靠他，归于他。愿荣耀归给他，直到永远。阿们！", en: "For from him and through him and to him are all things. To him be glory forever. Amen." },
  "1 Cor 10:31": { zh: "所以，你们或吃或喝，无论做什么，都要为荣耀神而行。", en: "So, whether you eat or drink, or whatever you do, do all to the glory of God." },
  "2 Cor 5:21": { zh: "神使那无罪的，替我们成为罪，好叫我们在他里面成为神的义。", en: "For our sake he made him to be sin who knew no sin, so that in him we might become the righteousness of God." },
  "Eph 1:4": { zh: "就如神从创立世界以前，在基督里拣选了我们，使我们在他面前成为圣洁，无有瑕疵。", en: "Even as he chose us in him before the foundation of the world, that we should be holy and blameless before him." },
  "Eph 2:8-9": { zh: "你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的；也不是出于行为，免得有人自夸。", en: "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast." },
  "Phil 2:6-8": { zh: "他本有神的形像，不以自己与神同等为强夺的，反倒虚己，取了奴仆的形像，成为人的样式。", en: "Who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant." },
  "Col 1:16": { zh: "因为万有都是靠他造的，无论是天上的、地上的，能看见的、不能看见的，都是藉着他造的，又是为他造的。", en: "For by him all things were created, in heaven and on earth, visible and invisible." },
  "2 Tim 3:16": { zh: "圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的。", en: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness." },
  "Heb 1:3": { zh: "他是神荣耀所发的光辉，是神本体的真像，常用他权能的命令托住万有。", en: "He is the radiance of the glory of God and the exact imprint of his nature, and he upholds the universe by the word of his power." },
  "Heb 11:1": { zh: "信就是所望之事的实底，是未见之事的确据。", en: "Now faith is the assurance of things hoped for, the conviction of things not seen." },
  "1 Pet 3:15": { zh: "只要心里尊主基督为圣。有人问你们心中盼望的缘由，就要常作准备，以温柔、敬畏的心回答各人。", en: "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you." },
  "1 John 1:9": { zh: "我们若认自己的罪，神是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。", en: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." },
  "Rev 4:11": { zh: "我们的主，我们的神，你是配得荣耀、尊贵、权柄的，因为你创造了万物，并且万物是因你的旨意被创造而有的。", en: "Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created." },
};

interface Props {
  verse: string;
}

export default function BibleVerse({ verse }: Props) {
  const [open, setOpen] = useState(false);
  const verseData = VERSE_TEXT[verse];

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium transition-all cursor-pointer
          ${open 
            ? 'bg-[var(--color-accent)]/30 text-[var(--color-primary)] dark:text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/50' 
            : 'bg-[var(--color-accent)]/15 text-[var(--color-primary)] dark:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/25'
          }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M10.75 16.82A7.462 7.462 0 0 1 15 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0 0 18 15.06V3.44a.75.75 0 0 0-.546-.718A9.006 9.006 0 0 0 15 2.5a9.006 9.006 0 0 0-4.25 1.062v13.258ZM9.25 4.562A9.006 9.006 0 0 0 5 3.5a9.006 9.006 0 0 0-2.454.218.75.75 0 0 0-.546.718v11.62a.75.75 0 0 0 .954.718A7.462 7.462 0 0 1 5 16.5a7.462 7.462 0 0 1 4.25 1.32V4.562Z" />
        </svg>
        {verse}
      </button>
      {open && (
        <span className="block mt-2 mb-2 p-3 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-sm leading-relaxed animate-in fade-in">
          {verseData ? (
            <>
              <span className="block text-[var(--color-text)] font-serif-cn mb-1">{verseData.zh}</span>
              <span className="block text-[var(--color-text-secondary)] italic text-xs">{verseData.en}</span>
            </>
          ) : (
            <span className="text-[var(--color-text-secondary)] italic">经文加载中...</span>
          )}
        </span>
      )}
    </span>
  );
}
