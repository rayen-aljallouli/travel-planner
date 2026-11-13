"""Join src/ into the deployable pages index.html and umrah.html."""
import json
import pathlib

root = pathlib.Path(__file__).parent
src = root / "src"
read = lambda name: (src / name).read_text("utf8")


def js_string(text):
    return json.dumps(text, ensure_ascii=False).replace("<", "\\u003c")


def umrah_dashboard():
    base = read("dashboard.html")
    head, rest = base.split("<body>\n", 1)
    script = rest[rest.index("<script>"):]
    return head + "<body>\n" + read("umrah-dashboard-body.html") + script


pages = {
    "index.html": ("form.html", read("prompt.md"), read("dashboard.html")),
    "umrah.html": ("umrah-form.html", read("umrah-prompt.md"), umrah_dashboard()),
}
builder = read("prompt.js").split("if (typeof module")[0].strip()
for out, (form, tpl, dash) in pages.items():
    page = read(form)
    for marker, value in (
        ("/*__CSS__*/", read("form.css")),
        ("/*__PROMPT_JS__*/", builder),
        ("/*__CORE_JS__*/", read("form-core.js")),
        ('"__TPL__"', js_string(tpl)),
        ('"__DASH__"', js_string(dash)),
    ):
        assert page.count(marker) == 1, (form, marker)
        page = page.replace(marker, value)
    (root / out).write_text(page, "utf8")
    print(out, len(page.encode("utf8")), "bytes")
