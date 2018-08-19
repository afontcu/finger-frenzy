function TimeFormatter({ value, render }) {
  const formattedTime = new Date(value).toISOString().slice(17, -1)
  return render(formattedTime)
}

export default TimeFormatter
