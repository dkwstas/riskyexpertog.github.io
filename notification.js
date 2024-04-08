const notification = document.getElementById("notification");
const notification_symbol = document.getElementById("notification_symbol");
const notification_message = document.getElementById("notification_message");
const notification_colors = Object.freeze({
    RED: "#ff0000",
    GREEN: "#46eb78",
    BLUE: "#3e52d6",
    GRAY: "#535353"
});
const notification_symbols = Object.freeze({
    INFO: "&nbsp;&#11165;&nbsp;",
    ARROW: "&nbsp;&#9432;&nbsp;",
    TRIANGLE: "&nbsp;&#9888;&nbsp;",
    RELOAD: "&nbsp;&#10227;&nbsp;"
});

function print_notification(type, message) {
    switch (type) {
        case "done": {
            notification.style.borderColor = notification_colors.GREEN;
            notification_symbol.style.color = notification_colors.GREEN;
            notification_symbol.innerHTML = notification_symbols.RELOAD;
            notification_message.textContent = message;
            break;
        }
        case "click": {
            notification.style.borderColor = notification_colors.GRAY;
            notification_symbol.style.color = notification_colors.GRAY;
            notification_symbol.innerHTML = notification_symbols.ARROW;
            notification_message.textContent = message;
            break;
        }
        case "warning": {
            notification.style.borderColor = notification_colors.RED;
            notification_symbol.style.color = notification_colors.RED;
            notification_symbol.innerHTML = notification_symbols.TRIANGLE;
            notification_message.textContent = message;
            break;
        }
        default: {
            notification.style.borderColor = notification_colors.BLUE;
            notification_symbol.style.color = notification_colors.BLUE;
            notification_symbol.innerHTML = notification_symbols.INFO;
            notification_message.textContent = message;
            break;
        }
    }
}

export { print_notification }