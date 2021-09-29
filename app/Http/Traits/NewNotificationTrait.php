<?php

namespace App\Http\Traits;
use App\Models\Notification;

trait NewNotificationTrait {
    public function saveNotification($userid,$category,$message,$link='') {
  
      $data['user_id'] = $userid;
      $data['link'] = $link;
      $data['message'] = $message;
      $data['category'] = $category;

      $notification = new Notification($data);
      return $notification->save();
  
    }
}