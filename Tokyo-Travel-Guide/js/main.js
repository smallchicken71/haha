// 東京旅遊指南的兩個互動功能：切換行程、試算預算。

// 功能一：按下日期按鈕時，只顯示選中的行程。
const dayButtons = document.querySelectorAll("[data-day]");
const dayPanels = document.querySelectorAll("[data-day-panel]");

dayButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const chosenDay = button.dataset.day;

    dayPanels.forEach(function (panel) {
      panel.hidden = panel.dataset.dayPanel !== chosenDay;
    });

    dayButtons.forEach(function (item) {
      const selected = item.dataset.day === chosenDay;
      item.classList.toggle("active", selected);
      item.classList.toggle("btn-outline", !selected);
      item.setAttribute("aria-pressed", String(selected));
    });
  });
});

// 功能二：用表單輸入值計算旅行總費用。
const budgetForm = document.getElementById("budget-form");

if (budgetForm) {
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 不讓表單重新載入網頁

    const days = Number(document.getElementById("days").value);
    const people = Number(document.getElementById("people").value);
    const hotel = Number(document.getElementById("hotel").value);
    const food = Number(document.getElementById("food").value);
    const transport = Number(document.getElementById("transport").value);
    const ticket = Number(document.getElementById("ticket").value);
    const error = document.getElementById("budget-error");

    const values = [days, people, hotel, food, transport, ticket];
    if (values.some(function (value) { return !Number.isFinite(value) || value < 0; }) ||
        !Number.isInteger(days) || !Number.isInteger(people) ||
        days < 1 || days > 30 || people < 1 || people > 30) {
      error.textContent = "請輸入正確的人數、天數和費用。";
      return;
    }

    error.textContent = "";
    const hotelTotal = (days - 1) * hotel * people;
    const foodTotal = days * food * people;
    const transportTotal = days * transport * people;
    const ticketTotal = days * ticket * people;
    const total = hotelTotal + foodTotal + transportTotal + ticketTotal;

    // 用 textContent 把新結果寫回 HTML 畫面。
    document.getElementById("hotel-total").textContent = yen(hotelTotal);
    document.getElementById("food-total").textContent = yen(foodTotal);
    document.getElementById("transport-total").textContent = yen(transportTotal);
    document.getElementById("ticket-total").textContent = yen(ticketTotal);
    document.getElementById("total").textContent = yen(total);
  });

  // 頁面載入後先顯示預設值的試算結果。
  budgetForm.requestSubmit();
}

function yen(number) {
  return "¥ " + number.toLocaleString("ja-JP");
}
