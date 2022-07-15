class Utils {
  hexToRgb(hex, alpha) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return `rgba(${parseInt(result[1], 16)}, ${parseInt(
        result[2],
        16
      )}, ${parseInt(result[3], 16)}, ${alpha})`;
    } else {
      console.log(result);
    }
  }
  randomString(length = 10) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  appendJs(links) {
    links.forEach((link) => {
      let tag = document.createElement("script");
      tag.setAttribute("src", link);
      document.body.appendChild(tag);
    });
  }
  appendCss(links) {
    links.forEach((link) => {
      let tag = document.createElement("link");
      tag.setAttribute("href", link);
      tag.setAttribute("rel", "stylesheet");
      document.body.appendChild(tag);
    });
  }
  fakeDatasetsArray(length = 25, min, max) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(Math.floor(min + Math.random() * (max - min + 1)));
    }
    return data;
  }
  fakeLabelsArray(length = 25) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(new Date().toLocaleDateString());
    }
    return data;
  }
  fakeColorsArray(length = 25, alpha = 1) {
    let data = [];
    for (let i = 0; i < length; i++) {
      data.push(
        this.hexToRgb(Math.floor(Math.random() * 16777215).toString(16), alpha)
      );
    }
    return data;
  }
  setDefaultTheme() {
    if (localStorage.theme == null) {
      localStorage.theme = "purp";
    }
  }
  getTheme() {
    return localStorage.theme;
  }
  getThemeColors() {
    return {
      purp: "6755ED",
      blue: "4287F5",
      flush: "D14545",
      apple: "4DC44D",
      steel: "1D1B25",
      wattle: "DBC944",
      orchid: "DB44D9",
      sorbus: "FC7B03",
      turquoise: "2CC8D4",
      emerald: "3AD64F",
    };
  }
  changeHue(rgb, degree) {
    var hsl = this.rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
      hsl.h -= 360;
    } else if (hsl.h < 0) {
      hsl.h += 360;
    }
    return this.hslToRGB(hsl);
  }
  rgbToHSL(rgb) {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, "");

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (rgb.length == 3) {
      rgb = rgb.replace(/(.)/g, "$1$1");
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
      g = parseInt(rgb.substr(2, 2), 16) / 255,
      b = parseInt(rgb.substr(4, 2), 16) / 255,
      cMax = Math.max(r, g, b),
      cMin = Math.min(r, g, b),
      delta = cMax - cMin,
      l = (cMax + cMin) / 2,
      h = 0,
      s = 0;

    if (delta == 0) {
      h = 0;
    } else if (cMax == r) {
      h = 60 * (((g - b) / delta) % 6);
    } else if (cMax == g) {
      h = 60 * ((b - r) / delta + 2);
    } else {
      h = 60 * ((r - g) / delta + 4);
    }

    if (delta == 0) {
      s = 0;
    } else {
      s = delta / (1 - Math.abs(2 * l - 1));
    }

    return {
      h: h,
      s: s,
      l: l,
    };
  }

  // expects an object and returns a string
  hslToRGB(hsl) {
    var h = hsl.h,
      s = hsl.s,
      l = hsl.l,
      c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
      m = l - c / 2,
      r,
      g,
      b;

    if (h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h < 300) {
      r = x;
      g = 0;
      b = c;
    } else {
      r = c;
      g = 0;
      b = x;
    }

    r = this.normalize_rgb_value(r, m);
    g = this.normalize_rgb_value(g, m);
    b = this.normalize_rgb_value(b, m);

    return this.rgbToHex(r, g, b);
  }

  normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
      color = 0;
    }
    return color;
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  loadThemeScrollBar() {
    let theme = this.getThemeColors()[this.getTheme()];
    let hex = `#${theme}`;
    let code = `
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: ${this.hexToRgb(theme, 1)} !important;
  background: linear-gradient(
    90deg,
    ${this.hexToRgb(theme, 1)} 0%,
    ${this.hexToRgb(theme, 1)} 35%
  );
}`;

    let tag = document.createElement("style");
    tag.innerHTML = code;
    document.body.appendChild(tag);
  }
}

export default new Utils();
