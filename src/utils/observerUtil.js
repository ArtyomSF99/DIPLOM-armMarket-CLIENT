export function ObserverUtil(
    ref,
    setIsVisible,
    hasBeenVisible,
    setHasBeenVisible
  ) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setIsVisible(true)
          setHasBeenVisible(true)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.65,
      },
    )
  
    if (ref.current !== undefined && ref.current !== null) {
      observer.observe(ref.current)
    }
    return () => {
      if (ref.current !== undefined && ref.current !== null) {
        observer.unobserve(ref.current)
      }
    }
  }
  