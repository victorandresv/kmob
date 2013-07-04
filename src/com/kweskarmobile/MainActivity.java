package com.kweskarmobile;

import java.io.IOException;
import java.io.OutputStreamWriter;

import android.os.Build;
import android.os.Build.VERSION_CODES;
import android.os.Bundle;
import android.app.Activity;
import android.content.Context;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MainActivity extends Activity {

	private WebView mWebView;
	final Activity activity = this;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		mWebView = (WebView) findViewById(R.id.webView);
		
		if (Build.VERSION.SDK_INT >= VERSION_CODES.JELLY_BEAN) 
			mWebView.getSettings().setAllowUniversalAccessFromFileURLs(true);
		
		mWebView.getSettings().setJavaScriptEnabled(true);
		mWebView.getSettings().setDomStorageEnabled(true);
		mWebView.setWebChromeClient(new WebChromeClient() {
			public void onProgressChanged(WebView view, int progress) {
				activity.setProgress(progress * 1000);
			}
		});
		

		mWebView.loadUrl("file:///android_asset/index.html");
	}

	public static void writeToFile(Context context, String content, String title)
			throws IOException {
		OutputStreamWriter osw = new OutputStreamWriter(context.openFileOutput(
				title, Context.MODE_WORLD_READABLE));
		osw.write(content);
		osw.close();
	}

}
