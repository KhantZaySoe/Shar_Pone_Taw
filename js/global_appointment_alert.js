// (function () {
//   const ALERT_KEY = "globalAppointmentAlert";
//   let globalTimer = null;

//   function safeText(value) {
//     return String(value || "")
//       .replaceAll("&", "&amp;")
//       .replaceAll("<", "&lt;")
//       .replaceAll(">", "&gt;")
//       .replaceAll('"', "&quot;")
//       .replaceAll("'", "&#039;");
//   }

//   function getAlertData() {
//     try {
//       return JSON.parse(localStorage.getItem(ALERT_KEY));
//     } catch (error) {
//       return null;
//     }
//   }

//   function saveAlertData(data) {
//     localStorage.setItem(ALERT_KEY, JSON.stringify(data));
//   }

//   function injectGlobalAlertStyles() {
//     if (document.getElementById("globalAppointmentAlertStyle")) return;

//     const style = document.createElement("style");
//     style.id = "globalAppointmentAlertStyle";

//     style.innerHTML = `
//       .global-appointment-overlay {
//         position: fixed;
//         inset: 0;
//         z-index: 999999;
//         background: rgba(15, 23, 42, 0.65);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         padding: 18px;
//         font-family: "Noto Sans Myanmar", sans-serif;
//       }

//       .global-appointment-card {
//         width: 100%;
//         max-width: 340px;
//         background: #ffffff;
//         border-radius: 24px;
//         padding: 22px;
//         text-align: center;
//         box-shadow: 0 24px 70px rgba(15, 23, 42, 0.35);
//         animation: globalAlertPop 0.25s ease;
//       }

//       @keyframes globalAlertPop {
//         from {
//           transform: scale(0.92);
//           opacity: 0;
//         }
//         to {
//           transform: scale(1);
//           opacity: 1;
//         }
//       }

//       .global-appointment-icon {
//         width: 58px;
//         height: 58px;
//         margin: 0 auto 12px;
//         border-radius: 50%;
//         background: #eff6ff;
//         color: #1d4ed8;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 26px;
//       }

//       .global-appointment-card h3 {
//         margin: 0 0 8px;
//         font-size: 17px;
//         color: #0f172a;
//       }

//       .global-appointment-card p {
//         margin: 0 0 16px;
//         font-size: 13px;
//         line-height: 1.65;
//         color: #334155;
//       }

//       .global-appointment-actions {
//         display: grid;
//         gap: 8px;
//       }

//       .global-join-btn,
//       .global-close-btn {
//         width: 100%;
//         border: none;
//         border-radius: 14px;
//         padding: 12px;
//         font-family: "Noto Sans Myanmar", sans-serif;
//         font-weight: 800;
//         cursor: pointer;
//       }

//       .global-join-btn {
//         background: rgba(1, 41, 123, 0.9);
//         color: white;
//       }

//       .global-close-btn {
//         background: #e2e8f0;
//         color: #0f172a;
//       }
//     `;

//     document.head.appendChild(style);
//   }

//   function enableEnterButtons(data) {
//     const enterButtons = document.querySelectorAll("[data-appointment-enter-btn]");

//     enterButtons.forEach((btn) => {
//       btn.disabled = false;
//       btn.setAttribute("aria-disabled", "false");

//       btn.style.opacity = "1";
//       btn.style.cursor = "pointer";
//       btn.style.pointerEvents = "auto";
//       btn.style.filter = "none";
//       btn.style.background = "rgba(1, 41, 123, 0.9)";
//       btn.style.color = "#ffffff";

//       btn.innerHTML = `
//         <i class="fa-solid fa-door-open"></i>
//         ဝင်ရောက်မည်
//       `;

//       btn.onclick = function () {
//         joinAppointmentNow(data && data.id);
//       };
//     });
//   }

//   function showGlobalAppointmentPopup(data) {
//     if (!data) return;

//     injectGlobalAlertStyles();

//     const existingPopup = document.getElementById("globalAppointmentAlertOverlay");
//     if (existingPopup) existingPopup.remove();

//     const overlay = document.createElement("div");
//     overlay.id = "globalAppointmentAlertOverlay";
//     overlay.className = "global-appointment-overlay";

//     overlay.innerHTML = `
//       <div class="global-appointment-card">
//         <div class="global-appointment-icon">
//           <i class="fa-solid fa-bell"></i>
//         </div>

//         <h3>ချိန်းဆိုမှု သတိပေးစာ</h3>

//         <p>
//           သင်ဆရာဝန်နဲ့ချိန်းဆိုထားသော အချိန် နီးကပ်ပါပြီ ဝင်ရောက်လို့ ရပါပြီ
//           ${
//             data.doctorName
//               ? `<br><b>${safeText(data.doctorName)}</b>`
//               : ""
//           }
//         </p>

//         <div class="global-appointment-actions">
//           <button type="button" class="global-close-btn" onclick="GlobalAppointmentAlert.closePopup()">
//             နားလည်ပါပြီ
//           </button>
//         </div>
//       </div>
//     `;

//     document.body.appendChild(overlay);

//     const updatedData = {
//       ...data,
//       status: "ready",
//       canJoin: true,
//       popupShown: true,
//       shownAt: Date.now(),
//     };

//     saveAlertData(updatedData);
//     enableEnterButtons(updatedData);

//     window.dispatchEvent(
//       new CustomEvent("globalAppointmentReady", {
//         detail: updatedData,
//       }),
//     );
//   }

//   function checkAndScheduleGlobalAlert() {
//     if (globalTimer) {
//       clearTimeout(globalTimer);
//       globalTimer = null;
//     }

//     const data = getAlertData();

//     if (!data) return;
//     if (data.status === "joined") return;

//     if (data.status === "ready" || data.canJoin === true) {
//       enableEnterButtons(data);

//       if (!data.popupShown) {
//         showGlobalAppointmentPopup(data);
//       }

//       return;
//     }

//     const notifyAt = Number(data.notifyAt);

//     if (!notifyAt) return;

//     const remainingTime = notifyAt - Date.now();

//     if (remainingTime <= 0) {
//       showGlobalAppointmentPopup(data);
//       return;
//     }

//     globalTimer = setTimeout(() => {
//       const latestData = getAlertData();

//       if (!latestData) return;
//       if (latestData.status === "joined") return;

//       showGlobalAppointmentPopup(latestData);
//     }, remainingTime);
//   }

//   function createGlobalAppointmentAlert(payload) {
//     const appointmentId = payload.id || `appointment_${Date.now()}`;

//     const data = {
//       id: appointmentId,
//       doctorId: payload.doctorId || null,
//       doctorName: payload.doctorName || "Doctor",
//       date: payload.date || "",
//       time: payload.time || "",
//       joinUrl: payload.joinUrl || "booking_hospital.html",
//       status: "waiting",
//       canJoin: false,
//       popupShown: false,
//       createdAt: Date.now(),
//       notifyAt: Date.now() + 10000,
//     };

//     saveAlertData(data);
//     checkAndScheduleGlobalAlert();

//     return data;
//   }

//   function closePopup() {
//     const popup = document.getElementById("globalAppointmentAlertOverlay");
//     if (popup) popup.remove();
//   }

//   function joinAppointmentNow(appointmentId) {
//     const data = getAlertData();

//     if (!data) {
//       alert("Appointment data မတွေ့ပါ။");
//       return;
//     }

//     if (appointmentId && String(data.id) !== String(appointmentId)) {
//       alert("Appointment data မကိုက်ညီပါ။");
//       return;
//     }

//     const updatedData = {
//       ...data,
//       status: "joined",
//       joinedAt: Date.now(),
//     };

//     saveAlertData(updatedData);
//     closePopup();

//     window.location.href = data.joinUrl || "booking_hospital.html";
//   }

//   window.GlobalAppointmentAlert = {
//     create: createGlobalAppointmentAlert,
//     check: checkAndScheduleGlobalAlert,
//     closePopup: closePopup,
//     joinNow: joinAppointmentNow,
//   };

//   document.addEventListener("DOMContentLoaded", () => {
//     injectGlobalAlertStyles();
//     checkAndScheduleGlobalAlert();
//   });

//   window.addEventListener("storage", (event) => {
//     if (event.key === ALERT_KEY) {
//       checkAndScheduleGlobalAlert();
//     }
//   });

//   document.addEventListener("visibilitychange", () => {
//     if (!document.hidden) {
//       checkAndScheduleGlobalAlert();
//     }
//   });

//   window.addEventListener("focus", checkAndScheduleGlobalAlert);
// })();