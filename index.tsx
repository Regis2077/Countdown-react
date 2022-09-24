interface CountdownReactProps{
  initialSeconds?: number
}

const CountdownReact  = ({initialSeconds = 1800}:CountdownReactProps) =>{
  
  const [seconds, setSeconds] = useState(initialSeconds)

  const countDownText = useMemo(() => {
   const oneMinuteInSeconds = 60;
   const remainingMinutes = Math.floor(seconds / oneMinuteInSeconds);
   const remainingSeconds = seconds - remainingMinutes * 60;
   const remainingMinutesStr = remainingMinutes.toString().padStart(2, '0')
   const remainingSecondsStr = remainingSeconds.toString().padStart(2, '0')

   return `${remainingMinutesStr}:${remainingSecondsStr}`;
  }, [seconds])

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
}
