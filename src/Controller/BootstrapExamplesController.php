<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/{_locale}')]
class BootstrapExamplesController extends AbstractController
{
    #[
        Route(
            [
                'es' => '/bootstrap/examples/{page}',
                'en' => '/bootstrap/examples/{page}',
            ],
            name: 'bootstrap-examples-page',
        ),
    ]
    public function index(string $page): Response
    {
        return $this->render("bootstrap_examples/{$page}.html.twig");
    }
}
