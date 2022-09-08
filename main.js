import * as THREE from 'three/build/three.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

        //Scene
        const scene = new THREE.Scene();
        //Camera
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        // Renderer
        const renderer = new THREE.WebGLRenderer({antialias: true});

        renderer.setClearColor("#233143");
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
        
        // Make Canvas Responsive
        window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        })

        // Create Box
        const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
        const boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        const boxMesh = new THREE.Mesh(boxGeometry, 
        boxMaterial);
        boxMesh.rotation.set(40, 0, 40);
        scene.add(boxMesh);

        camera.position.z = 5;


        const loader = new GLTFLoader();

        loader.load( 'assets/Car.glb', function ( gltf ) {

            scene.add( gltf.scene );

        }, undefined, function ( error ) {

            console.error( error );

        } );

        // Animate
        function animate() {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();