function formatDate(inputDate) {
    const parts = inputDate.split('-');
    if (parts.length === 3) {
      const [year, month, day] = parts;
      const formattedDate = `${month}-${day}-${year}`;
      return formattedDate;
    } else {
      return 'Invalid Date';
    }
}

export {
    formatDate
}
  

  