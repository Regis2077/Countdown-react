 useEffect(()=>{
    const oneSecondInMs = 1000;

    const timeoutId = setInterval(() => {
      if (seconds - 1 < 0) {
        clearInterval(timeoutId);
        return;
      }
      setSeconds(seconds - 1)
    }, oneSecondInMs)

    return function cleanup() {
      clearInterval(timeoutId)
    };
  },[seconds])
