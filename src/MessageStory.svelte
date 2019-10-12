<script>
  export let messageList = [];
  import Scroller from "@sveltejs/svelte-scroller";
  import { beforeUpdate, afterUpdate } from 'svelte';

  let el;

  afterUpdate(() => {
    el.scrollTop = el.scrollHeight;
  });
</script>

<style>
  .MessageList {
    overflow-y: auto;
    height: 400px;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding: 0.5em;
    margin: 0;
  }
  .Message {
    box-sizing: border-box;
    list-style: none;
    border-radius: 4px;
    color: #fff;
    margin: 0.5em;
    padding: 1em;
  }
  .YourMessage {
    left: 0;
    right: auto;
    background-color: purple;
    align-self: flex-end;
  }
  .ForeignMessage {
    left: auto;
    right: left;
    background-color: blue;
    align-self: flex-start;
  }
</style>

<div>
  <ul class="MessageList" bind:this={el}>
    {#each messageList as message}
      {#if message.isYourMessage}
        <li class="Message YourMessage">{message.text}</li>
      {:else}
        <li class="Message ForeignMessage">{message.text}</li>
      {/if}
    {:else}
      <div>Message list is empty</div>
    {/each}
  </ul>
</div>
