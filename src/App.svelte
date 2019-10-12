<script>
  import MessageStory from "./MessageStory.svelte";
  import io from 'socket.io-client';

  let isOpen = false;
  let value;

  let chat = io.connect('http://localhost:3000');

  chat.on('connect', function () {
    chat.emit('hi!');
  });

  let onSubmit = (e) => {
    e.preventDefault();
    chat.emit('chat message', 'test');
    value = ''
  }

  chat.on('chat message', function (data) {
    messageList.push({name: 'Test', isYourMessage: true, text: data});
    messageList = messageList;
  });

  const messageList = [
    { name: "Admin", isYourMessage: false, text: "test2" },
    { name: "Alexey", isYourMessage: true, text: "hello man" },
    {
      name: "Alexey",
      isYourMessage: true,
      text:
        "lorem rer evsdfklgjlsdfkgj gfdgljfd;lkj;lkj; gdflkgjdf;klgjfdl;k gfdlkgjdf;lgkjdf;l gfdlgkjdf;lkgjdf"
    },
    { name: "Admin", isYourMessage: false, text: "tfdfsd fdfsdfsd" },
    { name: "Admin", isYourMessage: false, text: "tfdfsd" }
  ];

  let onClick = () => isOpen = !isOpen;

</script>

<style>
  .messageStory {
    position: fixed;
    width: 400px;
    height: 500px;
    top: 0;
    left: 0;
    border: 1px solid gray;
  }
  .button {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>

{#if isOpen}
  <div class="messageStory">
    <MessageStory classeName={'MessageStory'} {messageList} />
    <form action="" on:submit={onSubmit}>
      <input  bind:value={value} autocomplete="off" /><button>Send</button>
    </form>
  </div>
{:else}
  <button value={value} class="button" on:click={onClick}>Открыть</button>
{/if}
