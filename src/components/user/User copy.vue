<template>
  <div>
<div class="container">
  <h1>Nieuwe Blog</h1>
    <!-- <div class="editor">
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <div class="menubar">

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.bold() }"
              @click="commands.bold"
              >
              <img src="..\..\assets\Bold.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.italic() }"
              @click="commands.italic"
              >
              <img src="..\..\assets\Italic.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.strike() }"
              @click="commands.strike"
              >
              <img src="..\..\assets\Strikethrough.png" width="70%" height="70%"  >
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.underline() }"
              @click="commands.underline"
              >
              <img src="..\..\assets\Underscore.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.code() }"
              @click="commands.code"
              >
              <img src="..\..\assets\Code.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.paragraph() }"
              @click="commands.paragraph"
              >
              <img src="..\..\assets\Paragraph.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.heading({ level: 1 }) }"
              @click="commands.heading({ level: 1 })"
              >
              <img src="..\..\assets\H1.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.heading({ level: 2 }) }"
              @click="commands.heading({ level: 2 })"
              >
              <img src="..\..\assets\H2.png" width="70%" height="70%">
              </div>
            </a>
          </div>
          
          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.heading({ level: 3 }) }"
              @click="commands.heading({ level: 3 })"
              >
              <img src="..\..\assets\H3.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.bullet_list() }"
              @click="commands.bullet_list"
              >
              <img src="..\..\assets\Bullets.png" width="70%" height="70%">
              </div>
            </a>
          </div>
          
          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.ordered_list() }"
              @click="commands.ordered_list"
              >
              <img src="..\..\assets\Nummers.png" width="70%" height="70%">
              </div>
            </a>
          </div>
          
          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.blockquote() }"
              @click="commands.blockquote"
              >
              <img src="..\..\assets\Quote.png" width="70%" height="70%">
              </div>
            </a>
          </div>
          
          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              :class="{ 'is-active': isActive.code_block() }"
              @click="commands.code_block"
              >
              <img src="..\..\assets\CodeBlock.png" width="70%" height="70%">
              </div>
            </a>
          </div>
         
          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              @click="commands.horizontal_rule"
              >
              <img src="..\..\assets\HorizontalRule.png" width="70%" height="70%">
              </div>
            </a>
          </div>

          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              @click="commands.undo"
              >
              <img src="..\..\assets\Undo.png" width="70%" height="70%">
              </div>
            </a>
          </div>
          
          <div id="gallery-text-right" style="float:left">
            <a href="#" id="gallery-paragraph">
              <div
              @click="commands.redo"
              >
              <img src="..\..\assets\Redo.png" width="70%" height="70%">
              </div>
            </a>
          </div>
        <br><br><br>
        </div>
      </editor-menu-bar>

      <editor-content class="editor__content PTSans f20w400" :editor="editor" />

    </div> -->

    <!-- <div class="actions">
      <button class="button" @click="clearContent">
        Clear Content
      </button>
      <button class="button" @click="setContent">
        Set Content
      </button>
    </div> -->
  </div>
    <!-- <div class="export">
      <h3>JSON</h3>
      <pre><code v-html="json"></code></pre>

      <h3>HTML</h3>
      <pre><code>{{ html }}</code></pre>
    </div> -->

  <!-- <div class="col-md-7" style="text-align: right">
    <button
      id="fetchHTML"
      type="button"
      class="btn btn-primary"
      name="save"
      @click="fetchenMaar()"
    >
      Fetch HTML
    </button>
  </div> -->

  </div>
</template>

<script>
// import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
// import {
//   Blockquote,
//   CodeBlock,
//   HardBreak,
//   Heading,
//   HorizontalRule,
//   OrderedList,
//   BulletList,
//   ListItem,
//   TodoItem,
//   TodoList,
//   Bold,
//   Code,
//   Italic,
//   Link,
//   Strike,
//   Underline,
//   History,
// } from 'tiptap-extensions'
export default {
  components: {
    // EditorContent,
    // EditorMenuBar,
  },
  data() {
    return {
      // editor: new Editor({
      //   extensions: [
      //     new Blockquote(),
      //     new BulletList(),
      //     new CodeBlock(),
      //     new HardBreak(),
      //     new Heading({ levels: [1, 2, 3] }),
      //     new HorizontalRule(),
      //     new ListItem(),
      //     new OrderedList(),
      //     new TodoItem(),
      //     new TodoList(),
      //     new Link(),
      //     new Bold(),
      //     new Code(),
      //     new Italic(),
      //     new Strike(),
      //     new Underline(),
      //     new History(),
      //   ],
      //   content: `
      //     <h2>
      //       Hier uw blog-titel
      //     </h2>
      //     <p style="font-size:20px" class="PTSans f20w400">
      //       Hier uw blog-tekst.
      //     </p>
      //   `,
      //   onUpdate: ({ getJSON, getHTML }) => {
      //     this.json = getJSON()
      //     this.html = getHTML()
      //   },
      // }),
      // json: 'Update content to see changes',
      // html: 'Update content to see changes',
    }
  },
  methods: {
    // clearContent() {
    //   this.editor.clearContent(true)
    //   this.editor.focus()
    // },
    // setContent() {
    //   // you can pass a json document
    //   this.editor.setContent({
    //     type: 'doc',
    //     content: [{
    //       type: 'paragraph',
    //       content: [
    //         {
    //           type: 'text',
    //           text: 'This is some inserted text. 👋',
    //         },
    //       ],
    //     }],
    //   }, true)
    //   // HTML string is also supported
    //   // this.editor.setContent('<p>This is some inserted text. 👋</p>')
    //   this.editor.focus()
    // },
    // fetchenMaar() {
    //   let blabla = this.html;
    // },
  },
}
</script>

<style lang="scss" scoped>
// @import "~variables";
// DUBBEL!!!!!!:
// .PTSans {
//   font-family: 'PT Sans';
// }
// .actions {
//   max-width: 30rem;
//   margin: 0 auto 2rem auto;
// }
// .export {
//   max-width: 30rem;
//   margin: 0 auto 2rem auto;
//   pre {
//     padding: 1rem;
//     border-radius: 5px;
//     font-size: 0.8rem;
//     font-weight: bold;
//     // background: rgba($color-black, 0.05);
//     // color: rgba($color-black, 0.8);
//   }
//   code {
//     display: block;
//     white-space: pre-wrap;
//   }
//   .f20w400 {
//     font-size: 20px;
//     font-weight:400;
//     line-height: 32px;
//     // margin-bottom: 0.5rem;
//   }
//   .f20w700 {
//     font-size: 20px;
//     font-weight:700;
//   }
//   .buttonOpmaak {
//     background-color: aqua;
//   }
//   #gallery-paragraph{
//     border-radius:4px;
//     padding-left:30px;
//   }
//   .image-formaat {
//     width: 70%; 
//     height: 70%;
//   }
//   .paddingVijf {
//     padding-left: "5px" 
//   }
// }
</style>