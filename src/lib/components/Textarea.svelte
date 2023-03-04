<script>
  import { onMount } from 'svelte';
  import { createPopup } from '@picmo/popup-picker';

  export let placeholder = 'Write something...';
  export let text = '';

  let elm;
  let trigger;
  let picker;

  onMount(() => {
    elm.focus();

    picker = createPopup(
      {
        showPreview: false,
      },
      {
        referenceElement: trigger,
        triggerElement: trigger,
        position: 'bottom-start',
      }
    );

    picker.addEventListener('emoji:select', (selection) => {
      typeInTextarea(selection.emoji);
    });
  });

  const toggleEmojiPicker = () => {
    picker.toggle(trigger);
  };

  function typeInTextarea(newText) {
    const [start, end] = [elm.selectionStart, elm.selectionEnd];
    elm.setRangeText(newText, start, end);
    text = elm.value;
  }
</script>

<div class="textAreaWrapper position-relative w-100">
  <textarea
    name="comment"
    {placeholder}
    bind:value={text}
    bind:this={elm}
    required
    class="d-block"
  />
  <button
    type="button"
    bind:this={trigger}
    on:click={toggleEmojiPicker}
    class="d-none d-lg-block"
  >
    Emojis
  </button>
</div>

<style>
  .textAreaWrapper {
    padding: 10px;
    padding-bottom: 40px;
    border: 2px solid hsl(223, 19%, 93%);
    border-radius: 5px;
  }

  textarea {
    min-height: 120px;
    width: 100%;
    padding: 0;
    border: 0;
    resize: none;
    font-family: 'Rubik', sans-serif;
    grid-area: textarea;
    outline: none;
  }

  textarea:focus {
    outline: none;
  }
</style>
