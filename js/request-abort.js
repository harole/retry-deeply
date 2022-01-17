(function() {
  const xhr = new XMLHttpRequest()
  xhr.onabort = (ev) => {
    console.log('xhr abort', ev)
  }
  xhr.open('get', 'https://baidu.com', true)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log('success')
    }
  }
  xhr.send()
  xhr.abort()

  const controller = new AbortController()
  const signal = controller.signal
  fetch('./js/request-aboret.js', { signal })
    .then(function(response) {
      console.log(response, 'success')
    }, function(err) {
      console.log(err, 'error')
    })
  controller.abort()
})()