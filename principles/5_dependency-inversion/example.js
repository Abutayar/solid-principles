/**
 * Abstraction representing a notification sender.
 * @abstract
 */
class NotificationSender {
    /**
     * Sends a notification message.
     * @param {string} message - The message to be sent.
     * @abstract
     */
    sendNotification(message) {
      throw new Error('sendNotification() method must be implemented');
    }
  }
  
  /**
   * Concrete implementation for sending notifications via email.
   * @extends NotificationSender
   */
  class EmailSender extends NotificationSender {
    /**
     * Sends a notification via email.
     * @param {string} message - The message to be sent via email.
     */
    sendNotification(message) {
      console.log(`Sending email notification: ${message}`);
      // Logic to send email...
    }
  }
  
  /**
   * Concrete implementation for sending notifications via SMS.
   * @extends NotificationSender
   */
  class SMSSender extends NotificationSender {
    /**
     * Sends a notification via SMS.
     * @param {string} message - The message to be sent via SMS.
     */
    sendNotification(message) {
      console.log(`Sending SMS notification: ${message}`);
      // Logic to send SMS...
    }
  }
  
  /**
   * Concrete implementation for sending notifications via push notifications.
   * @extends NotificationSender
   */
  class PushNotificationSender extends NotificationSender {
    /**
     * Sends a notification via push notifications.
     * @param {string} message - The message to be sent via push notifications.
     */
    sendNotification(message) {
      console.log(`Sending push notification: ${message}`);
      // Logic to send push notification...
    }
  }
  
  /**
   * High-level module that depends on the abstraction (NotificationSender).
   */
  class NotificationService {
    /**
     * Creates an instance of NotificationService.
     * @param {NotificationSender} sender - The notification sender to use.
     */
    constructor(sender) {
      this.sender = sender;
    }
  
    /**
     * Sends a notification message using the configured sender.
     * @param {string} message - The message to be sent.
     */
    sendNotification(message) {
      this.sender.sendNotification(message);
    }
  }
  
  // Usage
  const emailSender = new EmailSender();
  const smsSender = new SMSSender();
  const pushNotificationSender = new PushNotificationSender();
  
  const notificationService = new NotificationService(emailSender);
  notificationService.sendNotification('Hello via Email');
  
  // We can easily switch to a different notification sender without changing the NotificationService
  notificationService.sender = smsSender;
  notificationService.sendNotification('Hello via SMS');
  
  // We can also switch to another sender like push notifications
  notificationService.sender = pushNotificationSender;
  notificationService.sendNotification('Hello via Push Notification');
  