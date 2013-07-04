package com.kweskarmobile;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

public class OnStartService extends Service {
	public OnStartService() {
		
	}

	@Override
	public IBinder onBind(Intent intent) {
		// TODO: Return the communication channel to the service.
		throw new UnsupportedOperationException("Not yet implemented");
	}
}
