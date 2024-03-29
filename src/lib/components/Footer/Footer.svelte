<style>
  footer {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 1rem;
    font-size: 1.4rem;
  }
  span {
    display: inline-block;
    padding: 0 .4rem;
    animation: heartbeat 1s infinite;
  }
  @keyframes heartbeat {
    0% { transform: scale( .75 ); }
    20% { transform: scale( 1 ); }
    40% { transform: scale( .75 ); }
    60% { transform: scale( 1 ); }
    80% { transform: scale( .75 ); }
    100% { transform: scale( .75 ); }
  }
</style>

<footer>
  Made with <span>❤️</span> and Svelte!
</footer>
