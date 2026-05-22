function Badge({ text, styles }) {
  return (
    <span className={`text-sm px-3 py-1 rounded-full ${styles}`}> 
      {text} 
    </span>

  );
}

export default Badge;