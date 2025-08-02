<!-- more -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" rel="stylesheet"></link>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js"></script>

<style>
/* 🔐 Disable text selection globally */
body, .post-body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* ✅ Enable only in code box */
.code-box {
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  user-select: text !important;
}

/* ✅ Code Container */
.code-container {
  position: relative;
  background: #ffe6ec;
  border: 1px solid #ffb3c6;
  border-radius: 10px;
  padding: 50px 15px 15px 15px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
  overflow: hidden;
  max-width: 100%;
  box-sizing: border-box;
}

/* ✅ Responsive Code Box (no scroll, no overflow) */
.code-box {
  width: 100%;
  overflow-x: auto;
}

.code-box pre[class*="language-"] {
  background: transparent !important;
  color: #333 !important;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
}

/* ✅ Copy Button */
.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4b7d;
  border: none;
  color: white;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: background 0.3s;
  box-shadow: 0 2px 6px rgba(255, 75, 125, 0.4);
  z-index: 10;
}

.copy-btn:hover {
  background: #ff1e5a;
}
</style>


<div class="code-container">
  <button class="copy-btn" onclick="copyJavaCode(this)">📋 <i>Copy</i></button>
  <div class="code-box">
    <pre class="language-java">
      <code class="language-java">
&lt;shape xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;&gt;
&lt;solid android:color=&quot;#202030&quot; /&gt;
&lt;corners android:radius=&quot;12dp&quot; /&gt;
&lt;stroke android:width=&quot;1dp&quot; android:color=&quot;#AAAAAA&quot; /&gt;
&lt;/shape&gt;
</code></pre>
  </div>
</div>

<script>
function copyJavaCode(btn) {
  const code = btn.parentElement.querySelector("code").innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.innerHTML = "✅ Copied";
    setTimeout(() => {
      btn.innerHTML = "📋 <i>Copy</i>";
    }, 2000);
  });
}
</script>
<!-- more -->


