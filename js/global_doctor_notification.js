(function () {
  const AI_DOCTOR_RESULT_KEY = "aiDoctorSearchResult";
  const GLOBAL_APPOINTMENT_KEY = "globalAppointmentAlert";

  const UNREAD_DOCTOR_NOTIFICATION_KEY = "unreadDoctorNotification";
  const UNREAD_DOCTOR_NOTIFICATION_COUNT_KEY = "unreadDoctorNotificationCount";
  const DOCTOR_NOTIFICATION_SHOWN_KEY = "doctorReadyNotificationShownId";

  const ALERT_VISIBLE_DURATION = 10000;

  let doctorReadyTimer = null;
  let doctorReadyToastTimer = null;

  function getJSON(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function injectDoctorNotificationStyles() {
    if (document.getElementById("globalDoctorNotificationStyles")) return;

    const style = document.createElement("style");
    style.id = "globalDoctorNotificationStyles";

    style.innerHTML = `
      .noti-number-badge {
        position: absolute;
        top: 2px;
        right: 20%;

        min-width: 18px;
        height: 18px;
        padding: 0 5px;

        background: linear-gradient(180deg, #ff3b3b 0%, #d90429 100%);
        color: #ffffff;

        border: 2px solid #ffffff;
        border-radius: 999px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 10px;
        font-weight: 900;
        line-height: 1;

        box-shadow:
          0 4px 10px rgba(217, 4, 41, 0.35),
          0 0 0 3px rgba(239, 35, 60, 0.16);

        animation: doctorBadgePulse 1.2s infinite;
        z-index: 50;
        pointer-events: none;
      }

      @keyframes doctorBadgePulse {
        0% {
          transform: scale(1);
          box-shadow:
            0 4px 10px rgba(217, 4, 41, 0.35),
            0 0 0 0 rgba(239, 35, 60, 0.45);
        }

        70% {
          transform: scale(1.08);
          box-shadow:
            0 4px 10px rgba(217, 4, 41, 0.35),
            0 0 0 8px rgba(239, 35, 60, 0);
        }

        100% {
          transform: scale(1);
          box-shadow:
            0 4px 10px rgba(217, 4, 41, 0.35),
            0 0 0 0 rgba(239, 35, 60, 0);
        }
      }

      .global-doctor-ready-toast {
        position: fixed;
        left: 50%;
        top: 22px;
        transform: translateX(-50%);
        width: calc(100% - 36px);
        max-width: 340px;
        z-index: 30000;

        background: linear-gradient(135deg, #001f63 0%, #014fcc 100%);
        color: #ffffff;

        border-radius: 18px;
        padding: 14px 16px;

        display: flex;
        align-items: center;
        gap: 12px;

        box-shadow:
          0 18px 40px rgba(1, 41, 123, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.18);

        font-family: "Noto Sans Myanmar", sans-serif;
        animation: doctorToastSlideDown 0.28s ease;
      }

      .global-doctor-ready-toast i {
        width: 34px;
        height: 34px;
        min-width: 34px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.18);

        display: flex;
        align-items: center;
        justify-content: center;

        color: #ffffff;
        font-size: 15px;
      }

      .global-doctor-ready-toast h4 {
        margin: 0 0 3px;
        font-size: 13.5px;
        font-weight: 800;
        line-height: 1.35;
      }

      .global-doctor-ready-toast p {
        margin: 0;
        font-size: 11.5px;
        line-height: 1.45;
        opacity: 0.92;
      }

      .global-doctor-ready-toast-close {
        margin-left: auto;
        width: 28px;
        height: 28px;
        min-width: 28px;

        border: none;
        border-radius: 50%;

        background: rgba(255, 255, 255, 0.18);
        color: #ffffff;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
      }

      @keyframes doctorToastSlideDown {
        from {
          opacity: 0;
          transform: translate(-50%, -18px);
        }

        to {
          opacity: 1;
          transform: translate(-50%, 0);
        }
      }
    `;

    document.head.appendChild(style);
  }

  function findDoctorNavItem() {
    return (
      document.querySelector('.nav-item[data-nav="doctor"]') ||
      document.querySelector('.nav-item[data-nav="doctors"]') ||
      document.querySelector('a[href*="ai_doctor.html"]')
    );
  }

  function getUnreadDoctorNotificationCount() {
    const unreadFlag = localStorage.getItem(UNREAD_DOCTOR_NOTIFICATION_KEY);
    const unreadCount = Number(localStorage.getItem(UNREAD_DOCTOR_NOTIFICATION_COUNT_KEY)) || 0;

    if (unreadFlag === "true" && unreadCount <= 0) {
      return 1;
    }

    return unreadCount;
  }

  function setUnreadDoctorNotificationCount(count) {
    const finalCount = Math.max(1, Number(count) || 1);

    localStorage.setItem(UNREAD_DOCTOR_NOTIFICATION_KEY, "true");
    localStorage.setItem(UNREAD_DOCTOR_NOTIFICATION_COUNT_KEY, String(finalCount));

    renderDoctorNotificationBadge();
  }

  function renderDoctorNotificationBadge() {
    const doctorNav = findDoctorNavItem();

    if (!doctorNav) return;

    doctorNav.style.position = "relative";

    const count = getUnreadDoctorNotificationCount();
    let badge = doctorNav.querySelector(".noti-number-badge");

    const oldDotBadge = doctorNav.querySelector(".doctor-tab-badge");
    if (oldDotBadge) {
      oldDotBadge.remove();
    }

    if (count > 0) {
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "noti-number-badge";
        doctorNav.appendChild(badge);
      }

      badge.innerText = count > 99 ? "99+" : String(count);
      return;
    }

    if (badge) {
      badge.remove();
    }
  }

  function clearDoctorNotificationBadgeByUserClickOnly() {
    localStorage.removeItem(UNREAD_DOCTOR_NOTIFICATION_KEY);
    localStorage.removeItem(UNREAD_DOCTOR_NOTIFICATION_COUNT_KEY);

    renderDoctorNotificationBadge();
  }

  function attachDoctorTabClearHandler() {
    const doctorNav = findDoctorNavItem();

    if (!doctorNav) return;

    doctorNav.addEventListener("click", () => {
      clearDoctorNotificationBadgeByUserClickOnly();
    });
  }

  function getActiveDoctorResult() {
    const resultData = getJSON(AI_DOCTOR_RESULT_KEY);

    if (!resultData || !resultData.doctor) return null;

    const activeStatuses = ["waiting", "ready"];

    if (!activeStatuses.includes(resultData.bookingStatus)) return null;

    return resultData;
  }

  function syncDoctorReadyState() {
    const resultData = getActiveDoctorResult();

    if (!resultData) return null;

    const globalAppointment = getJSON(GLOBAL_APPOINTMENT_KEY);
    const notifyAt = Number(resultData.notifyAt || globalAppointment?.notifyAt || 0);

    const isAlreadyReady =
      resultData.bookingStatus === "ready" ||
      resultData.canJoin === true ||
      globalAppointment?.status === "ready" ||
      globalAppointment?.canJoin === true;

    const isTimeReady = notifyAt && Date.now() >= notifyAt;

    if (!isAlreadyReady && !isTimeReady) {
      return resultData;
    }

    const updatedResult = {
      ...resultData,
      bookingStatus: "ready",
      canJoin: true,
      readyAt: resultData.readyAt || new Date().toLocaleString(),
    };

    saveJSON(AI_DOCTOR_RESULT_KEY, updatedResult);

    if (globalAppointment) {
      const updatedGlobalAppointment = {
        ...globalAppointment,
        status: "ready",
        canJoin: true,
        readyAt: globalAppointment.readyAt || Date.now(),
      };

      saveJSON(GLOBAL_APPOINTMENT_KEY, updatedGlobalAppointment);
    }

    return updatedResult;
  }

  function dismissDoctorReadyToastAndShowBadge() {
    const toast = document.querySelector(".global-doctor-ready-toast");

    if (toast) {
      toast.remove();
    }

    if (doctorReadyToastTimer) {
      clearTimeout(doctorReadyToastTimer);
      doctorReadyToastTimer = null;
    }

    setUnreadDoctorNotificationCount(1);
  }

  function showDoctorReadyToast(resultData) {
    if (!resultData) return;

    const appointmentId = resultData.appointmentId || resultData.notifyAt || "doctor_ready";
    const alreadyShownId = localStorage.getItem(DOCTOR_NOTIFICATION_SHOWN_KEY);

    if (alreadyShownId === String(appointmentId)) {
      renderDoctorNotificationBadge();
      return;
    }

    localStorage.setItem(DOCTOR_NOTIFICATION_SHOWN_KEY, String(appointmentId));

    const oldToast = document.querySelector(".global-doctor-ready-toast");
    if (oldToast) oldToast.remove();

    const doctorName = resultData.doctor?.name || "Doctor";

    const toast = document.createElement("div");
    toast.className = "global-doctor-ready-toast";

    toast.innerHTML = `
      <i class="fa-solid fa-user-doctor"></i>

      <div>
        <h4>ဆရာဝန်နှင့် ဝင်ရောက်ဆွေးနွေးနိုင်ပါပြီ</h4>
        <p>${doctorName} နှင့် ချိန်းဆိုမှုအချိန် ရောက်ရှိပါပြီ။ ဝင်ရောက်နိုင်ပါပြီ။</p>
      </div>

      <button type="button" class="global-doctor-ready-toast-close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    `;

    document.body.appendChild(toast);

    const closeBtn = toast.querySelector(".global-doctor-ready-toast-close");

    if (closeBtn) {
      closeBtn.addEventListener("click", dismissDoctorReadyToastAndShowBadge);
    }

    doctorReadyToastTimer = setTimeout(() => {
      dismissDoctorReadyToastAndShowBadge();
    }, ALERT_VISIBLE_DURATION);
  }

  function checkDoctorReadyNotification() {
    const resultData = syncDoctorReadyState();

    if (!resultData) {
      renderDoctorNotificationBadge();
      return;
    }

    const isReady = resultData.bookingStatus === "ready" || resultData.canJoin === true;

    if (isReady) {
      showDoctorReadyToast(resultData);
      return;
    }

    renderDoctorNotificationBadge();
  }

  function scheduleDoctorReadyNotification() {
    if (doctorReadyTimer) {
      clearTimeout(doctorReadyTimer);
      doctorReadyTimer = null;
    }

    const resultData = getActiveDoctorResult();

    if (!resultData) {
      renderDoctorNotificationBadge();
      return;
    }

    const globalAppointment = getJSON(GLOBAL_APPOINTMENT_KEY);
    const notifyAt = Number(resultData.notifyAt || globalAppointment?.notifyAt || 0);

    if (!notifyAt) {
      renderDoctorNotificationBadge();
      return;
    }

    const remainingTime = notifyAt - Date.now();

    if (remainingTime <= 0) {
      checkDoctorReadyNotification();
      return;
    }

    doctorReadyTimer = setTimeout(() => {
      checkDoctorReadyNotification();
    }, remainingTime);
  }

  function initGlobalDoctorNotification() {
    injectDoctorNotificationStyles();
    attachDoctorTabClearHandler();
    renderDoctorNotificationBadge();
    scheduleDoctorReadyNotification();

    setInterval(() => {
      scheduleDoctorReadyNotification();
      renderDoctorNotificationBadge();
    }, 1500);
  }

  window.addEventListener("storage", (event) => {
    if (
      event.key === AI_DOCTOR_RESULT_KEY ||
      event.key === GLOBAL_APPOINTMENT_KEY ||
      event.key === UNREAD_DOCTOR_NOTIFICATION_KEY ||
      event.key === UNREAD_DOCTOR_NOTIFICATION_COUNT_KEY
    ) {
      scheduleDoctorReadyNotification();
      renderDoctorNotificationBadge();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      scheduleDoctorReadyNotification();
      renderDoctorNotificationBadge();
    }
  });

  window.addEventListener("focus", () => {
    scheduleDoctorReadyNotification();
    renderDoctorNotificationBadge();
  });

  document.addEventListener("DOMContentLoaded", initGlobalDoctorNotification);
})();