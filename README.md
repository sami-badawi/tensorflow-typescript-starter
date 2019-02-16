# Starter Project for TensorFlow.js in TypeScript #

[TensorFlow.js](https://js.tensorflow.org/) is an incredibly easy and powerful way to work with deep learning both in the browser and on the server.

TensorFlow.js would be even easier to use if it was written to run in TypeScript.

It is not hard to get this working, but there are still a little trail and error. This project is a starter project for running TensorFlow.js in TypeScript.

The example task is the *hello world* example of deep learning. Recognize the handwritten digits in the MNIST dataset by training a convolutional neural network.

This project is based on the [MNIST TensorFlow.js example](https://github.com/tensorflow/tfjs-examples/tree/master/mnist-node).



# To Run #

``` bash

git clone https://github.com/sami-badawi/tensorflow-typescript-starter.git

cd tensorflow-typescript-starter

npm i

npm run build

npm run test

npm run start

```


## To Run with Parameters ##

``` base

node dist/main.js --epochs 1

```

If you want to run with only 1 epoch.



## Output ##

```
node dist/main.js --epochs 1
2019-02-16 13:49:35.108255: I tensorflow/core/platform/cpu_feature_guard.cc:141] Your CPU supports instructions that this TensorFlow binary was not compiled to use: SSE4.2 AVX AVX2 FMA
_________________________________________________________________
Layer (type)                 Output shape              Param #   
=================================================================
conv2d_Conv2D1 (Conv2D)      [null,26,26,32]           320       
_________________________________________________________________
conv2d_Conv2D2 (Conv2D)      [null,24,24,32]           9248      
_________________________________________________________________
max_pooling2d_MaxPooling2D1  [null,12,12,32]           0         
_________________________________________________________________
conv2d_Conv2D3 (Conv2D)      [null,10,10,64]           18496     
_________________________________________________________________
conv2d_Conv2D4 (Conv2D)      [null,8,8,64]             36928     
_________________________________________________________________
max_pooling2d_MaxPooling2D2  [null,4,4,64]             0         
_________________________________________________________________
flatten_Flatten1 (Flatten)   [null,1024]               0         
_________________________________________________________________
dropout_Dropout1 (Dropout)   [null,1024]               0         
_________________________________________________________________
dense_Dense1 (Dense)         [null,512]                524800    
_________________________________________________________________
dropout_Dropout2 (Dropout)   [null,512]                0         
_________________________________________________________________
dense_Dense2 (Dense)         [null,10]                 5130      
=================================================================
Total params: 594922
Trainable params: 594922
Non-trainable params: 0
_________________________________________________________________
Epoch 1 / 1
eta=0.0 =====================================================================================================================================> 
477998ms 9373us/step - acc=0.921 loss=0.250 val_acc=0.983 val_loss=0.0553 
```

### Accuracy ###

The model gets to 98.3% accuracy on test data in 1 epoch and to 99.3% accuracy in 20 epochs.


# Unit Test #

There is only one unit tests. It checks that TensorFlow has been loaded. 

The purpose is to set up the needed dependencies to work with unit tests.
It is using Mocha and Chai libraries.
