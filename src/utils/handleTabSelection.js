function handleTabSelection(event, callback, params) {
  const args = [...arguments]
  console.log(...args.slice(2))
  if (event.key === " " || event.key === "Enter") {
    callback(...args.slice(2))
  }
}

export {handleTabSelection}