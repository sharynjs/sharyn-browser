const getFormData = (formElement, omitEmptyFields) => {
  const formData = new FormData(formElement)
  const data = {}
  Array.from(formData.entries()).forEach(([key, value]) => {
    if (!omitEmptyFields || value) {
      data[key] = value
    }
  })
  return data
}

module.exports = getFormData
