<?php

namespace NomisCZ\SteamAuth;

use Illuminate\Support\Fluent;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\RedirectResponse;

/**
 * Class SteamAuth
 * @package NomisCZ\SteamAuth
 * @author NomisCZ | Original: Nikita Brytkov (invisnik)
 */
interface SteamAuthInterface
{
    /**
     * @param Request $request
     */
    public function setRequest(Request $request) : void;

    /**
     * @return RedirectResponse
     */
    public function redirect() : RedirectResponse;

    /**
     * @return bool
     */
    public function validate() : bool;

    /**
     * @return string
     */
    public function getSteamId() : string;

    /**
     * @return Fluent
     */
    public function getUserInfo() : Fluent;
}