package com.mimidc.partner.activity;

import com.mimidc.partner.SampleCamActivity;
import com.wikitude.common.camera.CameraSettings;

public class AroundActivity extends SampleCamActivity {

    @Override
    public CameraSettings.CameraResolution getCameraResolution() {
        return CameraSettings.CameraResolution.AUTO;
    }
}
