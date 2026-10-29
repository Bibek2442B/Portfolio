'use client';
import React, {useState} from "react";
import NavigationBar from "@/components/NavigationBar";
import SideMenu from "@/components/SideMenu";
import MyHome from "@/sections/Home"
import About from "@/sections/About";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MyHome/>
      </div>

      <About/>

      <section id={"skills"}
               className={"p-4 flex flex-col justify-center items-center flex-1"}
      >
        <p>
          Hello! I'm Bibek, a 23-year-old Nepalese developer who has called Portugal home for the last 6 years. My journey into technology began with curiosity about how things work under the hood — and it hasn't stopped since.

          I recently completed my Bachelor's in Informatics Engineering at the Polytechnic Institute of Bragança, where I honed my skills in software development, algorithms, databases, and system design.

          I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll probably find me exploring new tech, contributing to side projects, or discovering Portugal's beautiful landscapes.
        </p>
      </section>

      <section id={"education"}
               className={"p-4 flex flex-col justify-center items-center flex-1"}
      >
        <p>
          Hello! I'm Bibek, a 23-year-old Nepalese developer who has called Portugal home for the last 6 years. My journey into technology began with curiosity about how things work under the hood — and it hasn't stopped since.

          I recently completed my Bachelor's in Informatics Engineering at the Polytechnic Institute of Bragança, where I honed my skills in software development, algorithms, databases, and system design.

          I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll probably find me exploring new tech, contributing to side projects, or discovering Portugal's beautiful landscapes.
        </p>
      </section>

      <section id={"projects"}
               className={"p-4 flex flex-col justify-center items-center flex-1"}
      >
        <p>
          Hello! I'm Bibek, a 23-year-old Nepalese developer who has called Portugal home for the last 6 years. My journey into technology began with curiosity about how things work under the hood — and it hasn't stopped since.

          I recently completed my Bachelor's in Informatics Engineering at the Polytechnic Institute of Bragança, where I honed my skills in software development, algorithms, databases, and system design.

          I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll probably find me exploring new tech, contributing to side projects, or discovering Portugal's beautiful landscapes.
        </p>
      </section>

      <section id={"contact"}
               className={"p-4 flex flex-col justify-center items-center flex-1"}
      >
        <p>
          Hello! I'm Bibek, a 23-year-old Nepalese developer who has called Portugal home for the last 6 years. My journey into technology began with curiosity about how things work under the hood — and it hasn't stopped since.

          I recently completed my Bachelor's in Informatics Engineering at the Polytechnic Institute of Bragança, where I honed my skills in software development, algorithms, databases, and system design.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, autem beatae debitis deserunt fuga odio optio possimus quae temporibus ut? Atque cum dicta ex id odit pariatur perferendis quasi quibusdam sit voluptatum! Ab aliquam aliquid aspernatur atque autem culpa dolorum ducimus ea esse facilis fugiat fugit illum incidunt, ipsam iusto laboriosam magnam magni minus molestiae natus numquam obcaecati odit quia sed velit vero voluptas voluptate. Beatae, maiores, repellat! Accusantium asperiores at consequatur, consequuntur corporis deleniti, eaque eius et explicabo illo ipsum minus nemo nihil nulla quas reiciendis, repellat repudiandae veniam voluptatem voluptatum? Cupiditate deleniti maiores nulla provident quo tenetur unde voluptates. Asperiores natus quos ratione veniam! Accusantium aliquam, asperiores atque blanditiis, commodi cumque ea eligendi explicabo hic illum, incidunt maxime molestias officia perferendis quaerat reiciendis repellat saepe sequi. Cum earum eius itaque maiores minima, molestiae quam qui suscipit? Ab aperiam dicta exercitationem, fuga illum laboriosam, laborum libero modi nemo numquam pariatur perferendis quisquam repellat sed tempora? Adipisci alias aliquam aliquid amet commodi corporis ducimus, eveniet, expedita incidunt ipsa iure iusto laboriosam maiores natus nesciunt nobis nulla quia quidem repellendus, rerum veniam vitae voluptas voluptatum? Accusamus, deleniti error facere, fugit molestiae nostrum porro rem rerum saepe sint ut velit voluptas, voluptatum. Error harum laborum laudantium reprehenderit sapiente? Dolore facere fugit laudantium, modi porro sit soluta voluptates. Aliquid animi autem exercitationem, harum incidunt inventore iste itaque minima obcaecati officia omnis, quam quos ratione repellat, rerum saepe sit temporibus voluptatibus? At culpa cupiditate doloribus dolorum ea earum eligendi esse, excepturi labore libero molestiae necessitatibus odio odit officia optio quae quaerat quam quia ratione repellat repellendus similique sint suscipit vero, voluptatibus! Esse explicabo fuga laborum quam, quos reprehenderit sequi tempore. Expedita itaque rerum veritatis. Eos facere in odio possimus? Ab accusantium amet aspernatur deleniti eligendi, harum hic perferendis soluta. Dolorem dolorum earum, eos eveniet excepturi maxime obcaecati odio, recusandae, rem suscipit veritatis vero vitae. Aut autem commodi culpa delectus, dolore dolorem ducimus est expedita, facere neque nostrum, obcaecati quas quidem repellat sapiente sed voluptatem. Laboriosam libero non numquam. Adipisci alias autem blanditiis consequuntur, cum ducimus eligendi eveniet fuga iste maiores nam nobis nulla, numquam pariatur quisquam sequi voluptatum. Atque eveniet illo officia possimus praesentium quo sed soluta voluptatem. A corporis doloremque dolorum illum iste magnam, nam natus quasi sapiente sint temporibus voluptatibus. Ab ad amet culpa debitis dolorum, est eum exercitationem hic maxime minus molestiae natus obcaecati praesentium quisquam quod repellat temporibus. Accusamus alias eligendi, error hic nostrum quas recusandae sequi sit temporibus. Alias architecto atque consectetur debitis ipsum non officiis rem. Consectetur, consequatur consequuntur corporis dicta distinctio doloremque eveniet, expedita facere facilis id officia possimus quae similique vero vitae voluptas voluptate! Ab accusamus adipisci aliquid amet asperiores beatae, blanditiis commodi consequatur cupiditate deleniti dolor dolorem doloremque ducimus ea esse eum eveniet harum iusto neque numquam porro quaerat, sint sunt tenetur ullam velit voluptatem voluptatum! Assumenda culpa ea eveniet hic id iusto, maxime molestiae mollitia nam nemo odio quos sit veritatis? Architecto beatae delectus dicta eaque eius inventore libero, quisquam? Aperiam dolorum iste voluptates.
          I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll probably find me exploring new tech, contributing to side projects, or discovering Portugal's beautiful landscapes.
        </p>
      </section>

    </>

  );
}
